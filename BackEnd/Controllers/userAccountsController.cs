using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEnd.Models;
using System.Security.Cryptography;
using System.Text;
using BCrypt.Net;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class userAccountsController : ControllerBase
    {
        private readonly dataContext _context;

        public userAccountsController(dataContext context)
        {
            _context = context;
        }

        // GET: api/userAccounts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<userAccounts>>> GetuserAccounts()
        {
            return await _context.userAccounts.ToListAsync();
        }

        
        [HttpPost("Login")]
        public async Task<ActionResult<userAccounts>> Login([FromBody] userAccounts userAccount)
        {
            var user =await _context.userAccounts.FirstOrDefaultAsync(x => x.email == userAccount.email);
            if (user!=null)
            {
                bool ifPass = BCrypt.Net.BCrypt.Verify(userAccount.password, user.password);
                if (ifPass)
                {
                    return Ok(user);
                }
            }            
            return NotFound();

        }

        // PUT: api/userAccounts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutuserAccounts(Guid id, userAccounts userAccounts)
        {
            if (id != userAccounts.id)
            {
                return BadRequest();
            }

            _context.Entry(userAccounts).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!userAccountsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/userAccounts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<userAccounts>> PostuserAccounts(userAccounts userAccounts)
        {
            string hashedPassword = BCrypt.Net.BCrypt.HashPassword(userAccounts.password);
            userAccounts.password = hashedPassword;
            _context.userAccounts.Add(userAccounts);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetuserAccounts", new { id = userAccounts.id }, userAccounts);
        }

        // DELETE: api/userAccounts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<userAccounts>> DeleteuserAccounts(Guid id)
        {
            var userAccounts = await _context.userAccounts.FindAsync(id);
            if (userAccounts == null)
            {
                return NotFound();
            }

            _context.userAccounts.Remove(userAccounts);
            await _context.SaveChangesAsync();

            return userAccounts;
        }

        private bool userAccountsExists(Guid id)
        {
            return _context.userAccounts.Any(e => e.id == id);
        }
    }
}
