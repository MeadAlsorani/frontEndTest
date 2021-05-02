using Microsoft.EntityFrameworkCore.Migrations;

namespace BackEnd.Migrations
{
    public partial class editrelationbetweenaddressandcustomer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_costumers_addresses_addressId",
                table: "costumers");

            migrationBuilder.DropIndex(
                name: "IX_costumers_addressId",
                table: "costumers");

            migrationBuilder.DropColumn(
                name: "addressId",
                table: "costumers");

            migrationBuilder.DropColumn(
                name: "addressLine",
                table: "addresses");

            migrationBuilder.AddColumn<string>(
                name: "buildingNo",
                table: "addresses",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "city",
                table: "addresses",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "costumerId",
                table: "addresses",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "dirstrict",
                table: "addresses",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "doorNo",
                table: "addresses",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "street",
                table: "addresses",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "zipCode",
                table: "addresses",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_addresses_costumerId",
                table: "addresses",
                column: "costumerId");

            migrationBuilder.AddForeignKey(
                name: "FK_addresses_costumers_costumerId",
                table: "addresses",
                column: "costumerId",
                principalTable: "costumers",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_addresses_costumers_costumerId",
                table: "addresses");

            migrationBuilder.DropIndex(
                name: "IX_addresses_costumerId",
                table: "addresses");

            migrationBuilder.DropColumn(
                name: "buildingNo",
                table: "addresses");

            migrationBuilder.DropColumn(
                name: "city",
                table: "addresses");

            migrationBuilder.DropColumn(
                name: "costumerId",
                table: "addresses");

            migrationBuilder.DropColumn(
                name: "dirstrict",
                table: "addresses");

            migrationBuilder.DropColumn(
                name: "doorNo",
                table: "addresses");

            migrationBuilder.DropColumn(
                name: "street",
                table: "addresses");

            migrationBuilder.DropColumn(
                name: "zipCode",
                table: "addresses");

            migrationBuilder.AddColumn<int>(
                name: "addressId",
                table: "costumers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "addressLine",
                table: "addresses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_costumers_addressId",
                table: "costumers",
                column: "addressId");

            migrationBuilder.AddForeignKey(
                name: "FK_costumers_addresses_addressId",
                table: "costumers",
                column: "addressId",
                principalTable: "addresses",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
