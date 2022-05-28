//   take the array and buld TEMPLATE

// function that puts all the chosen team member cards in to an array that gets passed to anonymous function at the bottom
function createCards(team) {
  const html = []
  // is a type of 'for each' loop
  for (const teamMember of team) {
    // chooses card to make for what team member is in the array
    // getrole comes from object method allowing the team member roll to pass in and trigger a switch statement
    switch (teamMember.getRole()) {
      case "Manager":
        html.push(generateManagerCard(teamMember))
        break
      case "Engineer":
        html.push(generateEngineerCard(teamMember))
        break
      case "Intern":
        html.push(generateInternCard(teamMember))
        break
    }
  }
  // .join converts arr of team member cards in to string
  // console.log(html);
  return html.join("")
}

// Manager

function generateManagerCard(manager) {
  return `
    <div class="card employee-card col">
    <div class="card-header">
        <h2 list-group-item">${manager.getName()}</h2>
        <h4 class="list-group-item"><i class="fas fa-solid fa-laptop mr-2"></i> ${manager.getRole()}</h4>
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
    `
}

// End of Manager

// Engineer

function generateEngineerCard(engineer) {
  return `
    <div class="card employee-card col">
    <div class="card-header">
        <h2 class="list-group-item">${engineer.getName()}</h2>
        <h4 class="list-group-item"><i class="fas fa-solid fa-code mr-2"></i> ${engineer.getRole()}</h4>
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Github:  <a href="https://github.com/${engineer.getGithub()}">${
    engineer.github
  }</a></li>
        </ul>
    </div>
</div>
    `
}

// End of Engineer

// Intern

function generateInternCard(intern) {
  return `
    <div class="card employee-card col">
    <div class="card-header">
        <h2 class="list-group-item">${intern.getName()}</h2>
        <h4 class="list-group-item"><i class="fas fa-solid fa-baby mr-2"></i> ${intern.getRole()}</h4>
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${intern.school}</li>
        </ul>
    </div>
</div>
    `
}

// End of Intern

                // HTML Template

module.exports = (team) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
    <title>Techno Magic Team Builder:2</title>
</head>
<body>
    <header>
    <h1 class="navbar-text text-light text-center navbar-dark bg-dark bg-info">Techno Magic<br>Team Builder:2</h1>
    </header>
    <main class="container row">
        ${createCards(team)}
    </main>
</body>
</html>
`
}