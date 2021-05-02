using Microsoft.EntityFrameworkCore.Migrations;

namespace BackEnd.Migrations
{
    public partial class editdistrictname : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "dirstrict",
                table: "addresses");

            migrationBuilder.AddColumn<string>(
                name: "district",
                table: "addresses",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "district",
                table: "addresses");

            migrationBuilder.AddColumn<string>(
                name: "dirstrict",
                table: "addresses",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
