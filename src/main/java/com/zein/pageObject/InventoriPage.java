package com.zein.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class InventoriPage {
    private static WebDriver driver;

    public InventoriPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath = "//div[@class='app_logo']")
    private WebElement logo;

    @FindBy(xpath = "//div[@class='inventory_item_name']")
    private List<WebElement> itemsName;

    @FindBy(xpath = "//select[@class='product_sort_container']")
    private WebElement productSort;

    public boolean isDisplayed(){
        logo.isDisplayed();
        return true;
    }

    public void selectDropdownProductByLabel(String label){
        Select selectDropdownProduct = new Select(productSort);
        selectDropdownProduct.selectByVisibleText(label);
    }
}
