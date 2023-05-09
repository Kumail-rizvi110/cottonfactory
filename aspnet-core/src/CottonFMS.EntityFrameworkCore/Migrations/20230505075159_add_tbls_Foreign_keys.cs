using Microsoft.EntityFrameworkCore.Migrations;

namespace CottonFMS.Migrations
{
    public partial class add_tbls_Foreign_keys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "CottonFiberPurchasedId",
                table: "Purchase",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "VendorsId",
                table: "Purchase",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "CottonFiberUsedInProductionId",
                table: "ProductionPlan",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "CustomersId",
                table: "Payments",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "OrdersId",
                table: "Payments",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "CottonInventoryId",
                table: "Orders",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "CustomersId",
                table: "Orders",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "EmployeesId",
                table: "EmployeesWorkingInProduction",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "CustomersId",
                table: "Delivery",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "OrdersId",
                table: "Delivery",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "ProductionPlanId",
                table: "CottonProduced",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "CottonProducedId",
                table: "CottonInventory",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "CottonFiberInventoryId",
                table: "CottonFiberUsedinProduction",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "CottonFiberPurchasedId",
                table: "CottonFiberInventory",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "EmployeesId",
                table: "Attendance",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "AssetsId",
                table: "AssetsWorkingInProductionPayments",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "AssetsId",
                table: "AssetsMaintenance",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Purchase_CottonFiberPurchasedId",
                table: "Purchase",
                column: "CottonFiberPurchasedId",
                unique: true,
                filter: "[CottonFiberPurchasedId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Purchase_VendorsId",
                table: "Purchase",
                column: "VendorsId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductionPlan_CottonFiberUsedInProductionId",
                table: "ProductionPlan",
                column: "CottonFiberUsedInProductionId",
                unique: true,
                filter: "[CottonFiberUsedInProductionId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Payments_CustomersId",
                table: "Payments",
                column: "CustomersId");

            migrationBuilder.CreateIndex(
                name: "IX_Payments_OrdersId",
                table: "Payments",
                column: "OrdersId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_CottonInventoryId",
                table: "Orders",
                column: "CottonInventoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_CustomersId",
                table: "Orders",
                column: "CustomersId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeesWorkingInProduction_EmployeesId",
                table: "EmployeesWorkingInProduction",
                column: "EmployeesId");

            migrationBuilder.CreateIndex(
                name: "IX_Delivery_CustomersId",
                table: "Delivery",
                column: "CustomersId");

            migrationBuilder.CreateIndex(
                name: "IX_Delivery_OrdersId",
                table: "Delivery",
                column: "OrdersId");

            migrationBuilder.CreateIndex(
                name: "IX_CottonProduced_ProductionPlanId",
                table: "CottonProduced",
                column: "ProductionPlanId");

            migrationBuilder.CreateIndex(
                name: "IX_CottonInventory_CottonProducedId",
                table: "CottonInventory",
                column: "CottonProducedId");

            migrationBuilder.CreateIndex(
                name: "IX_CottonFiberUsedinProduction_CottonFiberInventoryId",
                table: "CottonFiberUsedinProduction",
                column: "CottonFiberInventoryId");

            migrationBuilder.CreateIndex(
                name: "IX_CottonFiberInventory_CottonFiberPurchasedId",
                table: "CottonFiberInventory",
                column: "CottonFiberPurchasedId");

            migrationBuilder.CreateIndex(
                name: "IX_Attendance_EmployeesId",
                table: "Attendance",
                column: "EmployeesId");

            migrationBuilder.CreateIndex(
                name: "IX_AssetsWorkingInProductionPayments_AssetsId",
                table: "AssetsWorkingInProductionPayments",
                column: "AssetsId");

            migrationBuilder.CreateIndex(
                name: "IX_AssetsMaintenance_AssetsId",
                table: "AssetsMaintenance",
                column: "AssetsId");

            migrationBuilder.AddForeignKey(
                name: "FK_AssetsMaintenance_Assets_AssetsId",
                table: "AssetsMaintenance",
                column: "AssetsId",
                principalTable: "Assets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AssetsWorkingInProductionPayments_Assets_AssetsId",
                table: "AssetsWorkingInProductionPayments",
                column: "AssetsId",
                principalTable: "Assets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Attendance_Employees_EmployeesId",
                table: "Attendance",
                column: "EmployeesId",
                principalTable: "Employees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_CottonFiberInventory_CottonFiberPurchased_CottonFiberPurchasedId",
                table: "CottonFiberInventory",
                column: "CottonFiberPurchasedId",
                principalTable: "CottonFiberPurchased",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_CottonFiberUsedinProduction_CottonFiberInventory_CottonFiberInventoryId",
                table: "CottonFiberUsedinProduction",
                column: "CottonFiberInventoryId",
                principalTable: "CottonFiberInventory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_CottonInventory_CottonProduced_CottonProducedId",
                table: "CottonInventory",
                column: "CottonProducedId",
                principalTable: "CottonProduced",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_CottonProduced_ProductionPlan_ProductionPlanId",
                table: "CottonProduced",
                column: "ProductionPlanId",
                principalTable: "ProductionPlan",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Delivery_Customers_CustomersId",
                table: "Delivery",
                column: "CustomersId",
                principalTable: "Customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Delivery_Orders_OrdersId",
                table: "Delivery",
                column: "OrdersId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_EmployeesWorkingInProduction_Employees_EmployeesId",
                table: "EmployeesWorkingInProduction",
                column: "EmployeesId",
                principalTable: "Employees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_CottonInventory_CottonInventoryId",
                table: "Orders",
                column: "CottonInventoryId",
                principalTable: "CottonInventory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Customers_CustomersId",
                table: "Orders",
                column: "CustomersId",
                principalTable: "Customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Payments_Customers_CustomersId",
                table: "Payments",
                column: "CustomersId",
                principalTable: "Customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Payments_Orders_OrdersId",
                table: "Payments",
                column: "OrdersId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductionPlan_CottonFiberUsedinProduction_CottonFiberUsedInProductionId",
                table: "ProductionPlan",
                column: "CottonFiberUsedInProductionId",
                principalTable: "CottonFiberUsedinProduction",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Purchase_CottonFiberPurchased_CottonFiberPurchasedId",
                table: "Purchase",
                column: "CottonFiberPurchasedId",
                principalTable: "CottonFiberPurchased",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Purchase_Vendors_VendorsId",
                table: "Purchase",
                column: "VendorsId",
                principalTable: "Vendors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AssetsMaintenance_Assets_AssetsId",
                table: "AssetsMaintenance");

            migrationBuilder.DropForeignKey(
                name: "FK_AssetsWorkingInProductionPayments_Assets_AssetsId",
                table: "AssetsWorkingInProductionPayments");

            migrationBuilder.DropForeignKey(
                name: "FK_Attendance_Employees_EmployeesId",
                table: "Attendance");

            migrationBuilder.DropForeignKey(
                name: "FK_CottonFiberInventory_CottonFiberPurchased_CottonFiberPurchasedId",
                table: "CottonFiberInventory");

            migrationBuilder.DropForeignKey(
                name: "FK_CottonFiberUsedinProduction_CottonFiberInventory_CottonFiberInventoryId",
                table: "CottonFiberUsedinProduction");

            migrationBuilder.DropForeignKey(
                name: "FK_CottonInventory_CottonProduced_CottonProducedId",
                table: "CottonInventory");

            migrationBuilder.DropForeignKey(
                name: "FK_CottonProduced_ProductionPlan_ProductionPlanId",
                table: "CottonProduced");

            migrationBuilder.DropForeignKey(
                name: "FK_Delivery_Customers_CustomersId",
                table: "Delivery");

            migrationBuilder.DropForeignKey(
                name: "FK_Delivery_Orders_OrdersId",
                table: "Delivery");

            migrationBuilder.DropForeignKey(
                name: "FK_EmployeesWorkingInProduction_Employees_EmployeesId",
                table: "EmployeesWorkingInProduction");

            migrationBuilder.DropForeignKey(
                name: "FK_Orders_CottonInventory_CottonInventoryId",
                table: "Orders");

            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Customers_CustomersId",
                table: "Orders");

            migrationBuilder.DropForeignKey(
                name: "FK_Payments_Customers_CustomersId",
                table: "Payments");

            migrationBuilder.DropForeignKey(
                name: "FK_Payments_Orders_OrdersId",
                table: "Payments");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductionPlan_CottonFiberUsedinProduction_CottonFiberUsedInProductionId",
                table: "ProductionPlan");

            migrationBuilder.DropForeignKey(
                name: "FK_Purchase_CottonFiberPurchased_CottonFiberPurchasedId",
                table: "Purchase");

            migrationBuilder.DropForeignKey(
                name: "FK_Purchase_Vendors_VendorsId",
                table: "Purchase");

            migrationBuilder.DropIndex(
                name: "IX_Purchase_CottonFiberPurchasedId",
                table: "Purchase");

            migrationBuilder.DropIndex(
                name: "IX_Purchase_VendorsId",
                table: "Purchase");

            migrationBuilder.DropIndex(
                name: "IX_ProductionPlan_CottonFiberUsedInProductionId",
                table: "ProductionPlan");

            migrationBuilder.DropIndex(
                name: "IX_Payments_CustomersId",
                table: "Payments");

            migrationBuilder.DropIndex(
                name: "IX_Payments_OrdersId",
                table: "Payments");

            migrationBuilder.DropIndex(
                name: "IX_Orders_CottonInventoryId",
                table: "Orders");

            migrationBuilder.DropIndex(
                name: "IX_Orders_CustomersId",
                table: "Orders");

            migrationBuilder.DropIndex(
                name: "IX_EmployeesWorkingInProduction_EmployeesId",
                table: "EmployeesWorkingInProduction");

            migrationBuilder.DropIndex(
                name: "IX_Delivery_CustomersId",
                table: "Delivery");

            migrationBuilder.DropIndex(
                name: "IX_Delivery_OrdersId",
                table: "Delivery");

            migrationBuilder.DropIndex(
                name: "IX_CottonProduced_ProductionPlanId",
                table: "CottonProduced");

            migrationBuilder.DropIndex(
                name: "IX_CottonInventory_CottonProducedId",
                table: "CottonInventory");

            migrationBuilder.DropIndex(
                name: "IX_CottonFiberUsedinProduction_CottonFiberInventoryId",
                table: "CottonFiberUsedinProduction");

            migrationBuilder.DropIndex(
                name: "IX_CottonFiberInventory_CottonFiberPurchasedId",
                table: "CottonFiberInventory");

            migrationBuilder.DropIndex(
                name: "IX_Attendance_EmployeesId",
                table: "Attendance");

            migrationBuilder.DropIndex(
                name: "IX_AssetsWorkingInProductionPayments_AssetsId",
                table: "AssetsWorkingInProductionPayments");

            migrationBuilder.DropIndex(
                name: "IX_AssetsMaintenance_AssetsId",
                table: "AssetsMaintenance");

            migrationBuilder.DropColumn(
                name: "CottonFiberPurchasedId",
                table: "Purchase");

            migrationBuilder.DropColumn(
                name: "VendorsId",
                table: "Purchase");

            migrationBuilder.DropColumn(
                name: "CottonFiberUsedInProductionId",
                table: "ProductionPlan");

            migrationBuilder.DropColumn(
                name: "CustomersId",
                table: "Payments");

            migrationBuilder.DropColumn(
                name: "OrdersId",
                table: "Payments");

            migrationBuilder.DropColumn(
                name: "CottonInventoryId",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "CustomersId",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "EmployeesId",
                table: "EmployeesWorkingInProduction");

            migrationBuilder.DropColumn(
                name: "CustomersId",
                table: "Delivery");

            migrationBuilder.DropColumn(
                name: "OrdersId",
                table: "Delivery");

            migrationBuilder.DropColumn(
                name: "ProductionPlanId",
                table: "CottonProduced");

            migrationBuilder.DropColumn(
                name: "CottonProducedId",
                table: "CottonInventory");

            migrationBuilder.DropColumn(
                name: "CottonFiberInventoryId",
                table: "CottonFiberUsedinProduction");

            migrationBuilder.DropColumn(
                name: "CottonFiberPurchasedId",
                table: "CottonFiberInventory");

            migrationBuilder.DropColumn(
                name: "EmployeesId",
                table: "Attendance");

            migrationBuilder.DropColumn(
                name: "AssetsId",
                table: "AssetsWorkingInProductionPayments");

            migrationBuilder.DropColumn(
                name: "AssetsId",
                table: "AssetsMaintenance");
        }
    }
}
