package step_definitions;

import com.zein.pageObject.InventoriPage;
import com.zein.pageObject.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import static org.junit.Assert.assertEquals;

public class LoginSteps {
    private WebDriver webDriver;

    public LoginSteps() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Given("user open the web page")
    public void verifyLoginPageIsDisplayed() {
        LoginPage loginPage = new LoginPage(webDriver);
        Assert.assertTrue(loginPage.isDisplayed());
    }

    @When("User input \"(.*)\" as username and \"(.*)\" as password")
    public void inputCreadential(String username, String password) {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.setUsername(username);
        loginPage.setPassword(password);
        loginPage.clickLogin();
    }

    @Then("User is already on the landing page")
    public void isDashboardIsDisplayed() {
        InventoriPage inventoriPage = new InventoriPage(webDriver);
        Assert.assertTrue(inventoriPage.isDisplayed());

    }

    @Then("User see error \"(.*)\" on login page")
    public void verifyErorMassage(String errorText) {
        LoginPage loginPage = new LoginPage(webDriver);
        assertEquals(errorText,loginPage.getErrorMessage() );

    }

}
