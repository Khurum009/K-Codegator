package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features=".", glue="stepDefination", 
monochrome = true,
plugin = {"pretty","html:Report/Cucumber-Report", 
		"json:Report/Cocumber-Json/report.json", 
		"rerun:Rerun/Failed-Scenarios.txt"})
public class TestRunner {

}
