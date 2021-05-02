using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEnd.Models;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class addressesController : ControllerBase
    {
        private readonly dataContext _context;

        public addressesController(dataContext context)
        {
            _context = context;
        }

        // GET: api/addresses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<address>>> Getaddresses()
        {
            return await _context.addresses
                .Include(x=>x.costumer)
                .ToListAsync();
        }

        // GET: api/addresses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<address>> Getaddress(int id)
        {
            var address = await _context.addresses.FindAsync(id);

            if (address == null)
            {
                return NotFound();
            }

            return address;
        }

        // PUT: api/addresses/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putaddress(int id, address address)
        {
            if (id != address.id)
            {
                return BadRequest();
            }

            _context.Entry(address).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!addressExists(id))
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

        // POST: api/addresses
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<address>> Postaddress(address address)
        {
            _context.addresses.Add(address);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getaddress", new { id = address.id }, address);
        }

        // DELETE: api/addresses/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<address>> Deleteaddress(int id)
        {
            var address = await _context.addresses.FindAsync(id);
            if (address == null)
            {
                return NotFound();
            }

            _context.addresses.Remove(address);
            await _context.SaveChangesAsync();

            return address;
        }

        private bool addressExists(int id)
        {
            return _context.addresses.Any(e => e.id == id);
        }
    }
}
