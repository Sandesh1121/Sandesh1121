<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Settings</title>
  <link rel="stylesheet" href="settings.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <div class="container">
    <h1>Settings</h1>
    <div class="edit-button-container">
      <button class="edit-button" type="button">Edit</button>
    </div>
    <div class="tabs">
      <button class="tab-button active" data-tab="profile">Profile</button>
      <button class="tab-button" data-tab="privacy">Privacy</button>
      <button class="tab-button" data-tab="terms">Terms &amp; Conditions</button>
    </div>
    <div class="tab-content active" id="profile">
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" value="John Doe" readonly>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" value="john.doe@example.com" readonly>
        </div>
        <div class="form-group">
          <label for="address">Address</label>
          <input type="text" id="address" name="address" placeholder="Enter your address" value="123 Street, City" readonly>
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" value="123-456-7890" readonly>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" value="********" readonly>
          <button class="change-password-button" type="button">Change Password</button>
        </div>
        <div class="password-fields">
          <div class="form-group">
            <label for="old-password">Old Password</label>
            <input type="password" id="old-password" name="old-password" placeholder="Enter your old password">
          </div>
          <div class="form-group">
            <label for="new-password">New Password</label>
            <input type="password" id="new-password" name="new-password" placeholder="Enter your new password">
          </div>
          <div class="form-group">
            <label for="confirm-password">Confirm New Password</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your new password">
          </div>
        </div>
        <div class="form-group">
          <label for="notification">Notification</label>
          <input type="checkbox" id="notification" name="notification" disabled>
        </div>
        <div class="form-group">
          <button class="save-button" type="submit">Save Changes</button>
        </div>
      </form>
    </div>
    <div class="tab-content" id="privacy">
      <h2>Privacy Settings</h2>
      <div class="privacy-options">
        <div class="privacy-option">
          <input type="checkbox" id="show-email" name="show-email" disabled>
          <label for="show-email">Show Email</label>
        </div>
        <div class="privacy-option">
          <input type="checkbox" id="show-phone" name="show-phone" disabled>
          <label for="show-phone">Show Phone Number</label>
        </div>
        <div class="privacy-option">
          <input type="checkbox" id="show-address" name="show-address" disabled>
          <label for="show-address">Show Address</label>
        </div>
        <div class="privacy-option">
          <input type="checkbox" id="show-profile" name="show-profile" disabled>
          <label for="show-profile">Show Profile</label>
        </div>
      </div>
    </div>
    <div class="tab-content" id="terms">
      <h2>Terms &amp; Conditions</h2>
      <p>
        1. User Agreement: By using the job portal system, you acknowledge and agree to abide by the terms and conditions outlined herein. This agreement constitutes a legal and binding contract between you (the user) and the job portal system.
        <br>
        2. User Registration: You must provide accurate and complete information during the registration process. It is your responsibility to maintain the confidentiality of your account credentials and promptly inform us of any unauthorized access.
        <br>
        3. Account Usage: You agree to use the job portal system solely for lawful purposes and in compliance with applicable laws and regulations. Any misuse, unauthorized access, or fraudulent activity is strictly prohibited.
        <br>
        4. Job Listings: When posting job listings, you are responsible for ensuring the accuracy of the information provided. You must comply with all local laws, refrain from posting discriminatory or misleading content, and respect intellectual property rights.
        <br>
        5. Resume/CV Submission: By submitting your resume or CV to the job portal system, you grant us permission to store, process, and share your information with potential employers. We will handle your personal data in accordance with our privacy policy.
        <br>
        6. Prohibited Activities: You agree not to engage in any activities that may harm the job portal system or its users. This includes but is not limited to spamming, posting illegal or inappropriate content, attempting unauthorized access, or engaging in fraudulent behavior.
        <br>
        7. Privacy Policy: Our privacy policy explains how we collect, use, store, and protect your personal data. By using our platform, you agree to the terms outlined in our privacy policy.
        <br>
        8. Liability and Disclaimers: We strive to provide accurate and reliable information. However, we do not guarantee the accuracy, completeness, or reliability of job listings or user content. We are not liable for any damages or losses incurred as a result of using our platform or relying on the information provided.
        <br>
        9. Termination: We reserve the right to terminate or suspend user accounts at our discretion, without prior notice, for any violation of these terms and conditions or for any other reason.
      </p>
    </div>
  </div>
  <script src="settings.js"></script>
</body>
</html>
