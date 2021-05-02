using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class dataContext:DbContext
    {
        public dataContext(DbContextOptions<dataContext> options) : base(options) { }

        public DbSet<costumer> costumers{ get; set; }
        public DbSet<address> addresses { get; set; }
        public DbSet<userAccounts> userAccounts { get; set; }
    }
}
