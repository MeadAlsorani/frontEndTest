using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class costumer
    {
        public int id { get; set; }

        public string name { get; set; }

        public string surName { get; set; }

        public string phoneNumber { get; set; }
        
        public IList<address> addresses { get; set; }

        public string picture { get; set; }

    }
}
