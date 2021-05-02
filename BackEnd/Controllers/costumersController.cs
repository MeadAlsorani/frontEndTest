using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEnd.Models;
using System.IO;
using System.Net.Http.Headers;
using Microsoft.Extensions.FileProviders;
using Newtonsoft.Json.Linq;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class costumersController : ControllerBase
    {
        private readonly dataContext _context;

        public costumersController(dataContext context)
        {
            _context = context;
        }

        // GET: api/costumers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<costumer>>> Getcostumers()
        {
            return await _context.costumers
                .ToListAsync();
        }

        // GET: api/costumers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<costumer>> Getcostumer(int id)
        {
            var costumer = await _context.costumers
                .Include(x=>x.addresses)
                .FirstOrDefaultAsync(z=>z.id==id);


            return costumer;
        }

        // PUT: api/costumers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putcostumer(int id, costumer costumer)
        {
            if (id != costumer.id)
            {
                return BadRequest();
            }

            _context.Entry(costumer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!costumerExists(id))
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

        // POST: api/costumers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<costumer>> Postcostumer(costumer costumer)
        {
            _context.costumers.Add(costumer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getcostumer", new { id = costumer.id }, costumer);
        }

        // DELETE: api/costumers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<costumer>> Deletecostumer(int id)
        {
            var costumer = await _context.costumers.FindAsync(id);
            if (costumer == null)
            {
                return NotFound();
            }

            _context.costumers.Remove(costumer);
            await _context.SaveChangesAsync();

            return costumer;
        }

        [HttpPost("uplaodImage"), DisableRequestSizeLimit]
        public async Task<IActionResult> Upload(IFormFile images)
        {
            string newFileName="";
            if (images != null)
            {
                if (images.Length > 0)
                {
                    var fileName = Path.GetFileName(images.FileName);
                    var myUniqueFileName = Convert.ToString(Guid.NewGuid());
                    var fileExtension = Path.GetExtension(fileName);
                    newFileName = string.Concat(myUniqueFileName, fileExtension);
                    var filePath =
                        new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(),
                        "Resources", "customerImages")).Root + $@"\{newFileName}";

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await images.CopyToAsync(stream);
                    }
                }
                var json = Newtonsoft.Json.JsonConvert.SerializeObject(newFileName);
                return Ok(json);
            }
            else
            {
                return NotFound();
            }
        }

        private bool costumerExists(int id)
        {
            return _context.costumers.Any(e => e.id == id);
        }
    }
}
