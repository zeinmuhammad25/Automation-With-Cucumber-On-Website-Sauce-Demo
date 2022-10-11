package step_definitions;

import com.zein.pageObject.InventoriPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;

import static org.junit.Assert.assertEquals;

public class PurchaseSteps {
    private WebDriver webDriver;

    public PurchaseSteps() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    @When("User pick item \"(.*)\" and checkout to cart")
    public void putInventoryItem(String namaProduk) throws InterruptedException {
        InventoriPage inventoriPage = new InventoriPage(webDriver);
        InventoriPage.pilihItem(namaProduk);
        Thread.sleep(1000);
        InventoriPage.clickAddToChart();
        InventoriPage.clickBackToProduct();
        Thread.sleep(1000);
    }
    

    @Then("User will see a basket that has been filled with items that have been checkout")
    public void clickItemCartAndCheckout() throws InterruptedException {
        InventoriPage inventoriPage = new InventoriPage(webDriver);
        InventoriPage.clickIconCart();
        Thread.sleep(500);
        InventoriPage.clickButtonCheckOut();
    }

    @And("User input \"(.*)\" as first name \"(.*)\" as last name and \"(.*)\" as postal code")
    public void inputCheckOutInformation(String firstName, String lastName, String postalCode) throws InterruptedException {
        InventoriPage inventoriPage = new InventoriPage(webDriver);
        InventoriPage.inputCheckOutInformation(firstName, lastName, postalCode);
    }

    @Then("User will See Checkout Information Payment")
    public void getTextValuePayment() throws InterruptedException {
        InventoriPage inventoriPage = new InventoriPage(webDriver);
        InventoriPage.getPaymentInformation();
    }

    @Then("User will get information on the successful payment")
    public void paymentSuccess() throws InterruptedException {
        InventoriPage inventoriPage = new InventoriPage(webDriver);
        InventoriPage.paymentSuccess();
    }

}
