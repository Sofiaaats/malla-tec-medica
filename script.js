// Definición de ramos por semestre
const ramos = [
  { id: 'anatomia', nombre: 'Anatomía Humana', semestre: 1, requisitos: [] },
  { id: 'biocel', nombre: 'Biología Celular', semestre: 1, requisitos: [] },
  { id: 'labbiocel', nombre: 'Lab. Biología Celular', semestre: 1, requisitos: [] },
  { id: 'quimica', nombre: 'Química General', semestre: 1, requisitos: [] },
  { id: 'introTM', nombre: 'Introducción a la TM', semestre: 1, requisitos: [] },
  { id: 'algebra', nombre: 'Álgebra y Cálculo', semestre: 1, requisitos: [] },

  { id: 'histo', nombre: 'Histoembriología', semestre: 2, requisitos: ['anatomia', 'biocel'] },
  { id: 'fisica', nombre: 'Física General', semestre: 2, requisitos: ['algebra'] },
  { id: 'organica', nombre: 'Química Orgánica', semestre: 2, requisitos: ['quimica'] },
  { id: 'ingles1', nombre: 'Inglés I', semestre: 2, requisitos: [] },
  { id: 'comunicacion', nombre: 'Habilidades Comunicativas', semestre: 2, requisitos: [] },

  { id: 'fisiologia', nombre: 'Fisiología Humana', semestre: 3, requisitos: ['histo'] },
  { id: 'bioq', nombre: 'Bioquímica', semestre: 3, requisitos: ['organica'] },
  { id: 'bioetica', nombre: 'Bioética', semestre: 3, requisitos: ['introTM', 'comunicacion'] },
  { id: 'infecto', nombre: 'Infectología', semestre: 3, requisitos: ['biocel', 'labbiocel'] },
  { id: 'ingles2', nombre: 'Inglés II', semestre: 3, requisitos: ['ingles1'] },
  { id: 'razonamiento', nombre: 'Razonamiento Científico', semestre: 3, requisitos: ['comunicacion'] },

  { id: 'fisiopato', nombre: 'Fisiopatología', semestre: 4, requisitos: ['fisiologia'] },
  { id: 'farmaco', nombre: 'Farmacología', semestre: 4, requisitos: ['bioq'] },
  { id: 'ingles3', nombre: 'Inglés III', semestre: 4, requisitos: ['ingles2'] },
  { id: 'proteccion', nombre: 'Protección Radiológica', semestre: 4, requisitos: ['fisica', 'bioetica', 'infecto', 'ingles2', 'razonamiento', 'fisiologia', 'bioq'] },
  { id: 'radio1', nombre: 'Radiodiagnóstico I', semestre: 4, requisitos: ['fisica', 'bioetica', 'infecto', 'ingles2', 'razonamiento', 'fisiologia', 'bioq'] },
  { id: 'fismoderna', nombre: 'Física Electromagnética', semestre: 4, requisitos: ['fisica', 'bioetica', 'infecto', 'ingles2', 'razonamiento', 'fisiologia', 'bioq'] },

  // Agrega más ramos si lo deseas, manteniendo el formato
];

// Estado de ramos aprobados
const aprobados = new Set();

// Render de la malla
function renderMalla() {
  const contenedor = document.getElementById('malla');
  contenedor.innerHTML = '';

  const semestres = [...new Set(ramos.map(r => r.semestre))];
  semestres.forEach(sem => {
    const col = document.createElement('div');
    col.className = 'semestre';
    const titulo = document.createElement('h3');
    titulo.textContent = `Semestre ${sem}`;
    col.appendChild(titulo);

    ramos.filter(r => r.semestre === sem).forEach(ramo => {
      const div = document.createElement('div');
      div.className = 'ramo';
      div.textContent = ramo.nombre;

      if (!ramo.requisitos.every(r => aprobados.has(r))) {
        div.classList.add('bloqueado');
      } else if (aprobados.has(ramo.id)) {
        div.classList.add('aprobado');
      }

      if (!div.classList.contains('bloqueado')) {
        div.onclick = () => {
          if (aprobados.has(ramo.id)) {
            aprobados.delete(ramo.id);
          } else {
            aprobados.add(ramo.id);
          }
          renderMalla();
        };
      }

      col.appendChild(div);
    });

    contenedor.appendChild(col);
  });
}

renderMalla();
