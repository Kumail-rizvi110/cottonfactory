using Microsoft.EntityFrameworkCore.Migrations;

namespace CottonFMS.Migrations
{
    public partial class add_fields_tbl_purchase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Purchase",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Purchase",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Quality",
                table: "Purchase",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Quantity",
                table: "Purchase",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Purchase");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Purchase");

            migrationBuilder.DropColumn(
                name: "Quality",
                table: "Purchase");

            migrationBuilder.DropColumn(
                name: "Quantity",
                table: "Purchase");
        }
    }
}
