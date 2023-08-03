using Microsoft.EntityFrameworkCore.Migrations;

namespace CottonFMS.Migrations
{
    public partial class add_field_description_maintenance : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "AssetsMaintenance",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MaintenanceTime",
                table: "AssetsMaintenance",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "AssetsMaintenance");

            migrationBuilder.DropColumn(
                name: "MaintenanceTime",
                table: "AssetsMaintenance");
        }
    }
}
