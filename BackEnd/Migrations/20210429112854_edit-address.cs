using Microsoft.EntityFrameworkCore.Migrations;

namespace BackEnd.Migrations
{
    public partial class editaddress : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "buildingNo",
                table: "addresses");

            migrationBuilder.DropColumn(
                name: "city",
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

            migrationBuilder.AddColumn<string>(
                name: "picture",
                table: "costumers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "addressLine",
                table: "addresses",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "picture",
                table: "costumers");

            migrationBuilder.DropColumn(
                name: "addressLine",
                table: "addresses");

            migrationBuilder.AddColumn<string>(
                name: "buildingNo",
                table: "addresses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "city",
                table: "addresses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "dirstrict",
                table: "addresses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "doorNo",
                table: "addresses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "street",
                table: "addresses",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
