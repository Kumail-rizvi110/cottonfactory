using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CottonFMS.Migrations
{
    public partial class add_field_filepath_important_documents : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "ImportantDocuments");

            migrationBuilder.AddColumn<string>(
                name: "filePath",
                table: "ImportantDocuments",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "filePath",
                table: "ImportantDocuments");

            migrationBuilder.AddColumn<byte[]>(
                name: "Image",
                table: "ImportantDocuments",
                nullable: true);
        }
    }
}
