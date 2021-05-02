using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class userAccounts
    {
        public Guid id { get; set; }

        public string userName { get; set; }

        [EmailAddress]
        public string email { get; set; }
        
        public string password { get; set; }
    }
}
