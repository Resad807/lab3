 
const cvData = {
  contact: {
    phone: "+994-77-620-49-33",
    email: "liyevr840@gmail.com",
    info: "melumat"
  },
  education: {
    years: "2024-2028",
    field: "Informasiya Təhlükəsizliyi",
    university: "Azərbaycan Texniki Universitet"
  },
  skills: [
    "Proqramlaşdırma dilləri: Python, C++",
    "Əməliyyat sistemləri: Windows, Kali Linux",
    "Alətlər & Texnologiyalar: Microsoft Office programs"
  ],
  languages: ["Azərbaycan", "İngilis", "Rus", "Turk"],
  profile: {
    name: "Rəşad Əliyev",
    position: "Kiber Təhlükəsizlik",
    about: "Mən Azərbaycan Texniki Universitet tələbəsi, öyrənməyə can atan və ixtisasım üzrə yeni məlumatlar əldə etməyə can atan tələbəyəm. Proqramlaşdırma sahəsində inkişaf edirəm və bunun uğurlu alındığına inanıram.",
    github: "https://github.com/Resad807"
  }
};
 
function renderLeftColumn() {
  const left = document.getElementById('left-column');
  left.innerHTML = `
    <img src="resad_photo.jpg" alt="Resad Photo" class="profile-photo">
    <h2 class="left-header">Kontakt</h2>
    <p><strong>Telefon:</strong> <span contenteditable="true">${cvData.contact.phone}</span></p>
    <p><strong>Email:</strong> <span contenteditable="true">${cvData.contact.email}</span></p>
    <p><strong>Məlumat:</strong> <span contenteditable="true">${cvData.contact.info}</span></p>

    <h2 class="left-header">Təhsil</h2>
    <p><strong>${cvData.education.years}</strong><br>${cvData.education.field}<br>${cvData.education.university}</p>

    <h2 class="left-header">Bacarıqlar</h2>
    <ul id="skills-list">${cvData.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
    <input type="text" id="new-skill" placeholder="Yeni bacarıq">
    <button onclick="addSkill()">Əlavə et</button>

    <h2 class="left-header">Dillər</h2>
    <ul id="languages-list">${cvData.languages.map(lang => `<li>${lang}</li>`).join('')}</ul>
    <input type="text" id="new-lang" placeholder="Yeni dil">
    <button onclick="addLanguage()">Əlavə et</button>
  `;
}

 
function renderRightColumn() {
  const right = document.getElementById('right-column');
  right.innerHTML = `
    <h1>${cvData.profile.name}</h1>
    <h2 id="position" contenteditable="true">${cvData.profile.position}</h2>

    <h2>Profil</h2>
    <p contenteditable="true">${cvData.profile.about}</p>

    <h2>GitHub linki</h2>
    <p>Mənim haqqımda araşdırın:<br>
       <a href="${cvData.profile.github}" target="_blank">${cvData.profile.github}</a>
    </p>
  `;
}

 
function addSkill() {
  const input = document.getElementById('new-skill');
  if (input.value.trim()) {
    cvData.skills.push(input.value);
    input.value = '';
    renderLeftColumn();
  }
}

 
function addLanguage() {
  const input = document.getElementById('new-lang');
  if (input.value.trim()) {
    cvData.languages.push(input.value);
    input.value = '';
    renderLeftColumn();
  }
}
 
window.onload = () => {
  renderLeftColumn();
  renderRightColumn();
};
