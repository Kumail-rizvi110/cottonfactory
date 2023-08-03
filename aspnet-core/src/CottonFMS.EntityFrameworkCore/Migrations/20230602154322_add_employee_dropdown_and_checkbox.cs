using Microsoft.EntityFrameworkCore.Migrations;

namespace CottonFMS.Migrations
{
    public partial class add_employee_dropdown_and_checkbox : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "AttendanceMark",
                table: "Attendance",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "isChecked",
                table: "Attendance",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isChecked",
                table: "Attendance");

            migrationBuilder.AlterColumn<string>(
                name: "AttendanceMark",
                table: "Attendance",
                nullable: true,
                oldClrType: typeof(bool));
        }
    }
}
