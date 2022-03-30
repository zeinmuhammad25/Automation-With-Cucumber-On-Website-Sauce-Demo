package com.zein.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
    private static WebDriver driver;

    public HomePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath = "//button[@class='nav_toggle']")
    private WebElement navToggle;

    @FindBy(xpath = "//a[.='Home']")
    private WebElement btnHome;

    @FindBy(xpath = "//a[.='Interior']")
    private WebElement btnInterior;

    @FindBy(xpath = "//a[.='Amenities']")
    private WebElement btnAmenities;

    @FindBy(xpath = "//a[.='Rooms']")
    private WebElement btnRooms;

    @FindBy(xpath = "//a[.='Testimonials']")
    private WebElement btnTestimonial;

    @FindBy(xpath = "//li[6]/a[.='Legal Notice']")
    private WebElement btnLegalNotice;

    @FindBy(xpath = "//li[7]/a[.='About us']")
    private WebElement aboutUs;

    @FindBy(xpath = "//a[.='Contact']")
    private WebElement contactUs;

    @FindBy(xpath = "//img[@alt='Sekolah QA']")
    private WebElement logo;

    public boolean isDisplayed(){
        logo.isDisplayed();
        return true;
    }



    public void BtnNavToggle(){
        navToggle.click();
    }
    public void clickBtnHome(){
        btnHome.click();
    }
    public void clickBtnInterior(){
        btnInterior.click();
    }
    public void clickBtnAmenities(){
        btnAmenities.click();
    }
    public void clickBtnRooms(){
        btnRooms.click();
    }
    public void clickBtnTestimonial(){
        btnTestimonial.click();
    }
    public void clickBtnLegalNotice(){
        btnLegalNotice.click();
    }
    public void clickContactUs(){
        contactUs.click();
    }


}




