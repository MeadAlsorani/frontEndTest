using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BackEnd.Migrations
{
    public partial class initialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "addresses",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    city = table.Column<string>(nullable: true),
                    dirstrict = table.Column<string>(nullable: true),
                    street = table.Column<string>(nullable: true),
                    buildingNo = table.Column<string>(nullable: true),
                    doorNo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_addresses", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "userAccounts",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    userName = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: true),
                    password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_userAccounts", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "costumers",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(nullable: true),
                    surName = table.Column<string>(nullable: true),
                    phoneNumber = table.Column<string>(nullable: true),
                    addressId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_costumers", x => x.id);
                    table.ForeignKey(
                        name: "FK_costumers_addresses_addressId",
                        column: x => x.addressId,
                        principalTable: "addresses",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_costumers_addressId",
                table: "costumers",
                column: "addressId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "costumers");

            migrationBuilder.DropTable(
                name: "userAccounts");

            migrationBuilder.DropTable(
                name: "addresses");
        }
    }
}
