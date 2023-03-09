<div class="tab-pane multi-file-layout-tab multi-file-layout-file {{ fileTab.tabClasses() }} active" ng-repeat="tab in tabsetCtrl.tabs" ng-class="{active: tab.active}" tab-content-transclude="tab" style="">
  <!---->
  <div class="file-tab-contents" multi-file-contents="fileTab" compile-template="fileTab.template" scope-vars="$ctrl.scopeVars(fileTab)">
    <scroll-overflow-indicator allow-dark-mode="" class="scroll-overflow-indicator allow-dark-mode can-scroll-down">
      <div class="scrollable-container" ng-transclude="">
        <div markdown="fileTab.file.challenge.instructions" multi-language="true" language="fileTab.file.language" class="markdown collapsed">
          <h2>Checking for Compromised Accounts</h2>
          <h3>Overview</h3>
          <p>We want to inform our users if their email has been involved in a security breach on another site. Since people sometimes reuse passwords across multiple websites, we'll encourage them to update their information in case their password is no longer secure. As breached emails are critical, we want to notify users as soon as they log into our app.</p>
          <h2>Tasks</h2>
          <p>You'll see the current login logic in <code>src/login.js</code> with some hardcoded values for testing purposes. Your goal is to get this code hitting an external breach data API called Hack Check and notify the user of those breaches in a modal upon logging in successfully</p>
          <ol>
            <li>
              <p>Using the <strong><a href="https://hackcheck.woventeams.com/api/v4" target="_blank" rel="noopener">Hack Check API</a></strong>, retrieve the breaches for the user that just logged in (if there are any)<br>
                You can <strong><a href="https://hackcheck.woventeams.com/api/v4" target="_blank" rel="noopener">click here</a></strong> to read the API documentation.</p>
            </li>
            <li>
              <p>The API provides some breaches that we aren't interested in displaying to the user. Limit breaches you return to those that fit the following criteria:</p>
              <ul>
                <li><code>IsSensitive</code> is false AND</li>
                <li><code>DataClasses</code> array contains the value <code>'Passwords'</code> AND</li>
                <li><code>AddedDate</code> is <em>after</em> the user's <code>lastLogin</code></li>
              </ul>
            </li>
            <li>
              <p>If the user has breaches, return the following information in this format:</p>
              <pre><code> {
   success: true,
   meta: {
     suggestPasswordChange: true,
     breachedAccounts: [{
       name: &lt;Name&gt;,
       domain: &lt;Domain&gt;,
       breachDate: &lt;BreachDate&gt;,
       addedDate: &lt;AddedDate&gt;
     }]
   }
 }
</code></pre>
            </li>
          </ol>
          <h4>Test users</h4>
          <p>Before hitting the API, the app is hard coded to return the same 3 breaches for either user. </p>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Password</th>
                <th>API response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Safe User</td>
                <td><code>safe@example.com</code></td>
                <td><code>pw</code></td>
                <td>no breaches found (HTTP 404)</td>
                <td></td>
              </tr>
              <tr>
                <td>Unsafe User</td>
                <td><code>test@example.com</code></td>
                <td><code>pw</code></td>
                <td>some breaches found (HTTP 200)</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <h4>Other notes</h4>
          <p><strong>No UI changes needed</strong>: You should not modify any user interface code.</p>
          <p><strong>Error handling</strong>: Only light API error handling is expected. Note that the API will respond with HTTP 404 if the user has no known breaches.</p>
          <p><strong>Testing</strong>: Open the Web Preview. There will be a login form and a box below it that shows the result of the last login attempt. We will not evaluate changes to the automated tests.</p>
          <ul>
            <li>If you see Web Preview Qualified 404 errors, please disable any content blockers you may have running and try reloading the page.</li>
            <li>If you have API issues, double-check your request URL and API endpoint.</li>
          </ul>
          <p><strong>JavaScript Console</strong>: To see logging output for the Web Preview, click on the web preview console button:<br>
            <img src="//res.cloudinary.com/strive/image/upload/w_600,h_1000,c_limit/6848440fcc9e59de5055c46f725acda5-image.png" alt="image.png"></p>
          <p>To use a debugger or see detailed console logs, open your browser's JavaScript console / devtools.</p>
          <p><strong>Hot Reloading</strong>: You may disable hot reloading by clicking the green <strong>Auto</strong> switch on the Web Preview.</p>
        </div>
        <score-card-instructions challenge="fileTab.file.challenge"></score-card-instructions>
      </div>
      <span class="scroll-up" tooltip="Scroll up to see more"></span>
      <span class="scroll-down" tooltip="Scroll down to see more"></span>
    </scroll-overflow-indicator>
  </div>
</div>


1. Data quality issues: Likely issue if the search functionality relies heavily on the recommendation engine, and if there have been recent changes to the data schema or data sources.

2. Configuration issues: Likely issue if there have been recent changes to the configuration of the system, such as changes to the search functionality or the recommendation engine.

3. Caching issues: Likely issue if the local store or cache is not properly synchronized with the backend, or if there are issues with the caching strategy being used.

4. Server downtime: Likely issue if the recommendation engine or other backend services are experiencing outages or downtime.

5. Query formatting issues: Likely issue if there are issues with the formatting of the search queries being sent to the backend.

6. Data synchronization issues: Likely issue if there are issues with the synchronization of data between the recommendation engine and the JS API layer.

7. Component errors: Likely issue if there are issues with the React component that is responsible for displaying the search results.

8. API compatibility issues: Likely issue if there have been recent changes to the API used by the JS API layer, or if there are issues with the compatibility between the recommendation engine and the JS API layer.

9. User input issues: Likely issue if users are not properly entering data into the search field.

10. Integration issues: Likely issue if there are issues with the integration of the search functionality with other components or services in the system.

11. Performance issues: Likely issue if there are issues with the performance of the frontend infrastructure, such as heavy CPU usage or memory leaks.

12. Load balancing issues: Likely issue if there are issues with the load balancing of the frontend servers.

13. Code deployment issues: Likely issue if there have been recent changes to the code deployment process, or if there are issues with the version control system being used.

14. Third-party dependencies: Likely issue if there are issues with the third-party libraries or services being used by the search functionality.

15. User interface issues: Less likely issue, depending on the quality of the user interface design and implementation.

16. Accessibility issues: Less likely issue, depending on the accessibility features that have been implemented in the search functionality.

17. Security issues: Less likely issue, depending on the security measures that have been implemented in the system.

18. Network connectivity issues: Less likely issue, depending on the quality and reliability of the network infrastructure being used.