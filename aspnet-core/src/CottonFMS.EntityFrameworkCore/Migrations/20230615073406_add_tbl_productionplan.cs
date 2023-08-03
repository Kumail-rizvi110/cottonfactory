using Microsoft.EntityFrameworkCore.Migrations;

namespace CottonFMS.Migrations
{
    public partial class add_tbl_productionplan : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductionPlan_CottonFiberUsedinProduction_CottonFiberUsedInProductionId",
                table: "ProductionPlan");

            migrationBuilder.DropIndex(
                name: "IX_ProductionPlan_CottonFiberUsedInProductionId",
                table: "ProductionPlan");

            migrationBuilder.RenameColumn(
                name: "NoOfEmployees",
                table: "ProductionPlan",
                newName: "TimeTaken");

            migrationBuilder.RenameColumn(
                name: "NoOfAssets",
                table: "ProductionPlan",
                newName: "CottonProduced");

            migrationBuilder.RenameColumn(
                name: "CottonFiberUsedInProductionId",
                table: "ProductionPlan",
                newName: "EmployeesTeamId");

            migrationBuilder.AddColumn<int>(
                name: "CottonFiberUsed",
                table: "ProductionPlan",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Quality",
                table: "ProductionPlan",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FileName",
                table: "ImportantDocuments",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "ProductionPlanId",
                table: "CottonFiberUsedinProduction",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProductionPlan_EmployeesTeamId",
                table: "ProductionPlan",
                column: "EmployeesTeamId");

            migrationBuilder.CreateIndex(
                name: "IX_CottonFiberUsedinProduction_ProductionPlanId",
                table: "CottonFiberUsedinProduction",
                column: "ProductionPlanId");

            migrationBuilder.AddForeignKey(
                name: "FK_CottonFiberUsedinProduction_ProductionPlan_ProductionPlanId",
                table: "CottonFiberUsedinProduction",
                column: "ProductionPlanId",
                principalTable: "ProductionPlan",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductionPlan_EmployeesTeam_EmployeesTeamId",
                table: "ProductionPlan",
                column: "EmployeesTeamId",
                principalTable: "EmployeesTeam",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CottonFiberUsedinProduction_ProductionPlan_ProductionPlanId",
                table: "CottonFiberUsedinProduction");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductionPlan_EmployeesTeam_EmployeesTeamId",
                table: "ProductionPlan");

            migrationBuilder.DropIndex(
                name: "IX_ProductionPlan_EmployeesTeamId",
                table: "ProductionPlan");

            migrationBuilder.DropIndex(
                name: "IX_CottonFiberUsedinProduction_ProductionPlanId",
                table: "CottonFiberUsedinProduction");

            migrationBuilder.DropColumn(
                name: "CottonFiberUsed",
                table: "ProductionPlan");

            migrationBuilder.DropColumn(
                name: "Quality",
                table: "ProductionPlan");

            migrationBuilder.DropColumn(
                name: "FileName",
                table: "ImportantDocuments");

            migrationBuilder.DropColumn(
                name: "ProductionPlanId",
                table: "CottonFiberUsedinProduction");

            migrationBuilder.RenameColumn(
                name: "TimeTaken",
                table: "ProductionPlan",
                newName: "NoOfEmployees");

            migrationBuilder.RenameColumn(
                name: "EmployeesTeamId",
                table: "ProductionPlan",
                newName: "CottonFiberUsedInProductionId");

            migrationBuilder.RenameColumn(
                name: "CottonProduced",
                table: "ProductionPlan",
                newName: "NoOfAssets");

            migrationBuilder.CreateIndex(
                name: "IX_ProductionPlan_CottonFiberUsedInProductionId",
                table: "ProductionPlan",
                column: "CottonFiberUsedInProductionId",
                unique: true,
                filter: "[CottonFiberUsedInProductionId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductionPlan_CottonFiberUsedinProduction_CottonFiberUsedInProductionId",
                table: "ProductionPlan",
                column: "CottonFiberUsedInProductionId",
                principalTable: "CottonFiberUsedinProduction",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
