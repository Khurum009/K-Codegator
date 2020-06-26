package stepDefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Utilities.BaseClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.concurrent.TimeUnit;

public class LoginTest extends BaseClass {
	@Given("^I Open Chrome Browser$")
	public void I_Open_Chrome_Browser() {
		System.setProperty("webdriver.chrome.driver", "/Users/khurramishfaq/Downloads/chromedriver");
		driver = new ChromeDriver();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@When("^I go to the Salesforce application$")
	public void I_go_to_the_Salesforce_application() {
		driver.get("https://login.salesforce.com");
	}

	@Then("^I should see the Salesforce logo$")
	public void I_should_see_the_Salesforce_logo() {
		boolean isLogoPresent = driver.findElement(By.id("logo")).isDisplayed();
		Assert.assertTrue(isLogoPresent);
	}

	@When("^I enter \"([^\"]*)\" username$")
	public void I_enter_username(String username) {
		driver.findElement(By.id("username")).sendKeys(username);
	}

	@When("^I enter \"([^\"]*)\" password$")
	public void I_enter_password(String password) {
		driver.findElement(By.id("password")).sendKeys(password);
	}
	
	@When("^I click \"([^\"]*)\" button$")
	public void I_click_button(String loginbtn) {
		driver.findElement(By.id(loginbtn)).click();
	}
	

	@When("^I click the login button$")
	public void I_click_the_login_button() {
		driver.findElement(By.id("Login")).click();
	}

	@Then("^I should see the logout link$")
	public void I_should_see_the_logout_link() {
		boolean isLoggedIn = driver.findElement(By.id("setupLink")).isDisplayed();
		Assert.assertTrue(isLoggedIn);
	}

	@Then("^I enter valid username and invalid password$")
	public void I_enter_valid_username_and_invalid_password() {
		System.out.println("valid username and invalid password");
	}

	@When("^I maximize my window$")
	public void I_maximize_my_window() throws Throwable {
		driver.manage().window().maximize();
	}
}