function emailVerification(options) {
  const CEO = 'salt fudosman';
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Account Verification Email</title>
    </head>
    <body>
        <h1>Verify Your Account</h1>
        <p>Dear ${options.first_name},</p>
        <p>Thank you for creating an account on Assocmaster. Before you can start using your account, you need to verify your email address by clicking the link below:</p>
        <p><a href="${options.verificationURL}">Verify Account</a></p>
        <p>If you did not create an account with us, please ignore this email or contact us immediately.</p>
        <p>Best regards, ${CEO}<br>CEO Assocmaster</p>
    </body>
    </html>
  `;
}

function welcomeMessage(options) {
  const CEO = 'salt fudosman';
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Assocmaster</title>
  </head>
  <body>
    <header>
      <h1>Welcome to Assocmaster</h1>
    </header>
    <p>Dear ${options.first_name},</p>
    <main>
      <p>Assocmaster is a cutting-edge Association Management Software that provides a comprehensive suite of tools and features designed to help associations and organizations streamline operations, enhance communication and collaboration, and increase member engagement.</p>
      <p>With our intuitive design, customization features, and robust reporting and analytics capabilities, Assocmaster is positioned to become the leading solution for association management in Nigeria and beyond.</p>
    </main>
    <footer>
      <p>Thank you for choosing Assocmaster. We look forward to serving your association's needs.</p>
      <p>Best regards, ${CEO}<br>CEO Assocmaster</p>
    </footer>
  </body>
  </html>
  `;
}
module.exports = {
  emailVerification,
  welcomeMessage,
};