const ramos = [
  // PRIMER AÑO
  { id: 'anatomia', nombre: 'Anatomía Humana', semestre: 1, requisitos: [] },
  { id: 'biocel', nombre: 'Biología Celular', semestre: 1, requisitos: [] },
  { id: 'labbiocel', nombre: 'Laboratorio de Biología Celular', semestre: 1, requisitos: [] },
  { id: 'quimica', nombre: 'Química General', semestre: 1, requisitos: [] },
  { id: 'introTM', nombre: 'Introducción a la Tecnología Médica', semestre: 1, requisitos: [] },
  { id: 'algebra', nombre: 'Elementos de Álgebra y Cálculo', semestre: 1, requisitos: [] },

  { id: 'histo', nombre: 'Histoembriología', semestre: 2, requisitos: ['anatomia', 'biocel'] },
  { id: 'fisica', nombre: 'Física General', semestre: 2, requisitos: ['algebra'] },
  { id: 'organica', nombre: 'Química Orgánica', semestre: 2, requisitos: ['quimica'] },
  { id: 'ingles1', nombre: 'Inglés I', semestre: 2, requisitos: [] },
  { id: 'comunicacion', nombre: 'Habilidades Comunicativas', semestre: 2, requisitos: [] },

  // SEGUNDO AÑO
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
  { id: 'fiselec', nombre: 'Física Electromagnética', semestre: 4, requisitos: ['fisica', 'bioetica', 'infecto', 'ingles2', 'razonamiento', 'fisiologia', 'bioq'] },

  // TERCER AÑO
  { id: 'procTM', nombre: 'Procedimientos de Tecnología Médica y Bioseguridad', semestre: 5, requisitos: ['farmaco'] },
  { id: 'salud1', nombre: 'Salud Pública I', semestre: 5, requisitos: ['fisiopato'] },
  { id: 'ingles4', nombre: 'Inglés IV', semestre: 5, requisitos: ['ingles3'] },
  { id: 'moderna', nombre: 'Física Moderna', semestre: 5, requisitos: ['proteccion', 'fiselec'] },
  { id: 'radio2', nombre: 'Radiodiagnóstico II', semestre: 5, requisitos: ['radio1', 'farmaco'] },
  { id: 'anatomiaimg', nombre: 'Anatomía Imagenológica', semestre: 5, requisitos: ['fisiopato', 'radio1'] },

  { id: 'salud2', nombre: 'Salud Pública II', semestre: 6, requisitos: ['salud1', 'procTM'] },
  { id: 'fisicanuclear', nombre: 'Física Nuclear', semestre: 6, requisitos: ['moderna'] },
  { id: 'tc', nombre: 'Tomografía Computada', semestre: 6, requisitos: ['radio2', 'anatomiaimg'] },
  { id: 'siri', nombre: 'Sistema Informático en Radiología', semestre: 6, requisitos: ['radio2'] },
  { id: 'patologiaimg', nombre: 'Patología Imagenológica', semestre: 6, requisitos: ['radio2', 'anatomiaimg'] },

  // CUARTO AÑO
  { id: 'admin', nombre: 'Administración y Gestión en Salud', semestre: 7, requisitos: ['salud2', 'siri'] },
  { id: 'educacion', nombre: 'Educación en Salud', semestre: 7, requisitos: ['salud2'] },
  { id: 'mednuclear', nombre: 'Medicina Nuclear', semestre: 7, requisitos: ['fisicanuclear'] },
  { id: 'intervencionismo', nombre: 'Intervencionismo Endovascular', semestre: 7, requisitos: ['patologiaimg'] },
  { id: 'integrador1', nombre: 'Integrador I', semestre: 7, requisitos: ['tc', 'siri', 'patologiaimg'] },
  { id: 'ultrasonido', nombre: 'Ultrasonido', semestre: 7, requisitos: ['patologiaimg'] },

  { id: 'metodologia', nombre: 'Metodología de la Investigación', semestre: 8, requisitos: ['salud2', 'mednuclear'] },
  { id: 'calidad', nombre: 'Gestión y Aseguramiento de la Calidad', semestre: 8, requisitos: ['admin', 'mednuclear'] },
  { id: 'pensamiento', nombre: 'Pensamiento Crítico', semestre: 8, requisitos: ['razonamiento'] },
  { id: 'radioterapia', nombre: 'Radioterapia', semestre: 8, requisitos: ['integrador1', 'intervencionismo'] },
  { id: 'resonancia', nombre: 'Resonancia Magnética', semestre: 8, requisitos: ['integrador1', 'ultrasonido'] },

  // QUINTO AÑO
  { id: 'social', nombre: 'Responsabilidad Social', semestre: 9, requisitos: ['pensamiento'] },
  { id: 'seminario', nombre: 'Seminario de Investigación', semestre: 9, requisitos: ['metodologia', 'calidad', 'pensamiento', 'radioterapia', 'resonancia'] },

  { id: 'integrador2', nombre: 'Integrador II', semestre: 10, requisitos: ['metodologia', 'calidad', 'pensamiento', 'radioterapia', 'resonancia'] },
];

const aprobados = new Set();

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
