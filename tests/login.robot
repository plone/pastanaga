# ============================================================================
# LOGIN
# ============================================================================
#
# Run this robot test stand-alone:
#
#  $ bin/pybot tests/login.robot
#
# ============================================================================

*** Settings ***

Documentation   As a registered user I can log in
Library         Selenium2Library  timeout=10  implicit_wait=0
Test Setup      Test Setup
Test Teardown   Test Teardown


*** Variables ***

${HOST}                 127.0.0.1
${PORT}                 3000
${BROWSER}              chrome
${PLONE_URL}            http://${HOST}:${PORT}
${HEADLESS}             ${true}
${PRIVATE_URL}          ${PLONE_URL}/private-document

# Page Object
${Login-Page-Field-Username}  xpath=//input[@name='username']
${Login-Page-Field-Password}  xpath=//input[@name='__ac_password']
${Login-Page-Button-Submit}  xpath=//button[@type="submit"]
${Logout-Button}  Logout

*** Keywords ***

# --- TEST SETUP / TEARDOWN --------------------------------------------------

Test Setup
  ${options}=  Evaluate  sys.modules['selenium.webdriver'].ChromeOptions()  sys, selenium.webdriver
  Run keyword if  '${HEADLESS}' == '${true}'  Call Method  ${options}  add_argument  headless
  Call Method  ${options}  add_argument  disable-extensions
  Call Method  ${options}  add_argument  start-maximized
  Create WebDriver  Chrome  chrome_options=${options}

Test Teardown
  Close Browser

# --- GIVEN ------------------------------------------------------------------

a login form
  Go To  ${PLONE_URL}/login
  Wait until page contains  Login
  Wait until page contains element  ${Login-Page-Field-Username}
  Wait until page contains element  ${Login-Page-Field-Password}
  Wait until page contains element  ${Login-Page-Button-Submit}

an anonymous user
  Go To  ${PLONE_URL}/login
  Wait until page contains  Login
  Wait until page contains element  ${Login-Page-Button-Submit}
  Wait until page contains element  ${Login-Page-Field-Username}
  Wait until page contains element  ${Login-Page-Field-Password}

# --- WHEN -------------------------------------------------------------------

I enter an invalid credentials
  Input Text  ${Login-Page-Field-Username}  ${INVALID_USERNAME}
  Input Text  ${Login-Page-Field-Password}  ${INVALID_PASSWORD}
  Click Button  ${Login-Page-Button-Submit}

I enter valid credentials
  Input Text  ${Login-Page-Field-Username}  ${VALID_USERNAME}
  Input Text  ${Login-Page-Field-Password}  ${VALID_PASSWORD}
  Click Button  ${Login-Page-Button-Submit}

I log out
  Wait until page contains  Applications
  Click Element  ${Header-Drop-Down}
  Wait until element is visible  ${Drop-Down-Menu}
  Wait until element is visible  ${Logout-Button}
  Click Element  ${Logout-Button}

I access a private URL
  Go To  ${PRIVATE-URL}

# --- THEN -------------------------------------------------------------------

I am logged in
  Wait until page contains  Logout
  Page should contain  Logout

I am not logged in
  Wait until page contains  Login
  Page should not contain  Logout

I see a notification that I am logged in
  Wait until page contains  You are now logged in
  Page should contain  You are now logged in

I see a notification that I entered invalid credentials
  Wait until page contains  Wrong login and/or password
  Page should contain  Wrong login and/or password

I am logged out
  Wait until page contains  Login
  Page should not contain  Logout

I am redirected to the login page
  Location should be  ${PLONE_URL}/login
  Wait until page contains  Login
  Page should not contain  Logout

I am redirected to the login form
  Wait until page contains  Login
  Wait until page contains element  ${Login-Page-Field-Username}
  Wait until page contains element  ${Login-Page-Field-Password}
  Wait until page contains element  ${Login-Page-Button-Submit}


*** Test Cases ***

Scenario: User enters invalid credentials
  Given a login form
   When I enter invalid credentials
   Then I am not logged in
    and I see a notification that I entered invalid credentials

Scenario: User enters valid credentials
  Given a login form
   When I enter valid credentials
   Then I am logged in
    and I see a notification that I am logged in

Scenario: Logout
  Given a logged in user
   When I log out
   Then I am logged out
    and I am redirected to the login page

Scenario: Anonymous user is redirected to the login form
  Given an anonymous user
   When I access a private URL
   Then I am redirected to the login form

Scenario: Anonymous user is redirected to original URL after login
 Given an anonymous user
  When I access a private URL
   and I log in with valid credentials
  Then I am logged in
   and I am redirected to the original URL

Scenario: User resets her password
 Given a login form
  When I reset my password
  Then I see a notification that an email has been sent to reset my password
   and an email has been sent to reset my password