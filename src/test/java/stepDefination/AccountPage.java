package stepDefination;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import Utilities.BaseClass;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class AccountPage extends BaseClass{

	@When("^I click Accounts tab$")
	public void I_click_Accounts_tab() {
	   driver.findElement(By.linkText("Accounts")).click();
	}
	@Then("^I am on Accounts home page$")
	public void I_am_on_Accounts_home_page() {
	    String acctHome = driver.findElement(By.className("pageDescription")).getText();
	    Assert.assertEquals("Home", acctHome);
	}
	@Then("^I click the new button$")
	public void I_click_the_new_button() {
	    driver.findElement(By.name("new")).click();
	}
	@Then("^I enter Account Name field$")
	public void I_enter_Account_Name_field() {
	   driver.findElement(By.id("acc2")).sendKeys("Khurum");
	}
	@When("^I click the save button$")
	public void I_click_the_save_button()  {
	    driver.findElement(By.name("save")).click();
	}
	@Then("^I should see the Account record$")
	public void I_should_see_the_Account_record()  {
	  System.out.println(driver.getCurrentUrl());
	}
	@Then("^I should see the Rating field$")
	public void I_should_see_the_Rating_field()  {
	    boolean isRatingPresent = driver.findElement(By.id("acc9")).isDisplayed();
	    Assert.assertTrue(isRatingPresent);
	}
	@Then("^I select Hot from the Rating field$")
	public void I_select_Hot_from_the_Rating_field()  {
		WebElement ratingField = driver.findElement(By.id("acc9"));
		Select rating = new Select(ratingField);
		rating.selectByValue("Hot");
	}
	@When("^I create an Account$")
	public void I_create_an_Account(DataTable accountDetails) throws Throwable {
		List<Map<String,String>>accountData = accountDetails.asMaps();
		System.out.println(accountData.size());
		for(Map<String, String> data : accountData) {
			driver.findElement(By.linkText("Accounts")).click();
			driver.findElement(By.name("new")).click();
			driver.findElement(By.id("acc2")).sendKeys(data.get("Account name"));
			WebElement type = driver.findElement(By.id("acc9"));
			Select typeField = new Select(type);
			typeField.selectByValue(data.get("Rating"));
			driver.findElement(By.id("acc5")).sendKeys("01007");
			driver.findElement(By.id("acc12")).sendKeys("Website");
			driver.findElement(By.name("save")).click();
			
		}
	}
	
	@When("^I click the \"([^\"]*)\" button$")
	public void I_click_the_button(String loginbtn) {
	  driver.findElement(By.name(loginbtn)).click();
	}

	@When("^I click \"([^\"]*)\" tab$")
	public void I_click_tab(String menutab)  {
		driver.findElement(By.id(menutab)).click();
	}

	@Then("^I am on \"([^\"]*)\" home page$")
	public void I_am_on_home_page(String expectedPage) {
	    String actualpage=driver.findElement(By.className("pageType")).getText();
	    String expPage = expectedPage;
	    Assert.assertEquals(expPage, actualpage);
	    
	    
	}	
}
