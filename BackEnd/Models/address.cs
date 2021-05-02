using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class address
    {
        public int id { get; set; }

        public string city { get; set; }

        public string district { get; set; }

        public string street { get; set; }

        public string zipCode { get; set; }
        public string buildingNo { get; set; }

        public string doorNo { get; set; }

        public int costumerId { get; set; }
        public costumer costumer { get; set; }
    }
}
