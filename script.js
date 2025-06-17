document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
    generateEtapas();
});

const etapas = [
    {
        numero: 1,
        nombre: 'Awareness',
        titulo: 'Awareness (Conciencia)',
        descripcion: 'El usuario se da cuenta de que tiene una necesidad o problema',
        icono: 'fas fa-lightbulb',
        color: '#ff6b6b'
    },
    {
        numero: 2,
        nombre: 'Consideration',
        titulo: 'Consideration (Consideración)',
        descripcion: 'El usuario investiga y evalúa diferentes opciones y soluciones',
        icono: 'fas fa-search',
        color: '#4ecdc4'
    },
    {
        numero: 3,
        nombre: 'Decision',
        titulo: 'Decision (Decisión)',
        descripcion: 'El usuario decide qué opción elegir',
        icono: 'fas fa-check-circle',
        color: '#45b7d1'
    },
    {
        numero: 4,
        nombre: 'Purchase',
        titulo: 'Purchase/Onboarding (Compra/Incorporación)',
        descripcion: 'El usuario realiza la compra o se registra en el servicio',
        icono: 'fas fa-shopping-cart',
        color: '#96ceb4'
    },
    {
        numero: 5,
        nombre: 'Usage',
        titulo: 'Usage (Uso)',
        descripcion: 'El usuario utiliza el producto o servicio',
        icono: 'fas fa-play',
        color: '#ffeaa7'
    },
    {
        numero: 6,
        nombre: 'Advocacy',
        titulo: 'Advocacy (Recomendación)',
        descripcion: 'El usuario recomienda el producto o servicio a otros',
        icono: 'fas fa-heart',
        color: '#fd79a8'
    }
];

function initializeForm() {
    // Establecer fecha actual
    const fechaInput = document.getElementById('fecha');
    if (fechaInput) {
        fechaInput.valueAsDate = new Date();
    }

    // Agregar listeners
    const form = document.getElementById('customerJourneyForm');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
}

function generateEtapas() {
    const container = document.getElementById('etapasContainer');
    if (!container) return;

    etapas.forEach(etapa => {
        const etapaHTML = createEtapaHTML(etapa);
        container.appendChild(etapaHTML);
    });
}

function createEtapaHTML(etapa) {
    const etapaDiv = document.createElement('div');
    etapaDiv.className = 'etapa-card fade-in';
    etapaDiv.innerHTML = `
        <div class="etapa-header">
            <div class="etapa-number" style="background-color: ${etapa.color}">
                <i class="${etapa.icono}"></i>
            </div>
            <div>
                <h3 class="etapa-title">${etapa.titulo}</h3>
                <p style="color: #6c757d; margin: 0; font-size: 0.9rem;">${etapa.descripcion}</p>
            </div>
        </div>

        <div class="form-group">
            <label>Descripción de la Etapa:</label>
            <textarea name="etapa_${etapa.numero}_descripcion" placeholder="${etapa.descripcion}" rows="3"></textarea>
        </div>

        <div class="form-group">
            <label>Duración:</label>
            <input type="text" name="etapa_${etapa.numero}_duracion" placeholder="ej. 1-3 días">
        </div>

        <div class="form-group">
            <label><i class="fas fa-bullseye"></i> Objetivos del Usuario:</label>
            <textarea name="etapa_${etapa.numero}_objetivos" placeholder="¿Qué quiere lograr el usuario en esta etapa?" rows="2"></textarea>
        </div>

        <div class="form-group">
            <label><i class="fas fa-bolt"></i> Acciones del Usuario:</label>
            <textarea name="etapa_${etapa.numero}_acciones" placeholder="¿Qué hace el usuario en esta etapa?" rows="2"></textarea>
        </div>

        <div class="form-group">
            <label><i class="fas fa-mobile-alt"></i> Puntos de Contacto (Touchpoints):</label>
            <table class="touchpoints-table">
                <thead>
                    <tr>
                        <th>Canal</th>
                        <th>Interacción</th>
                        <th>Importancia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" name="etapa_${etapa.numero}_canal_1" placeholder="Canal"></td>
                        <td><input type="text" name="etapa_${etapa.numero}_interaccion_1" placeholder="Interacción"></td>
                        <td>
                            <select name="etapa_${etapa.numero}_importancia_1">
                                <option value="">Seleccionar</option>
                                <option value="alta">Alta</option>
                                <option value="media">Media</option>
                                <option value="baja">Baja</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="text" name="etapa_${etapa.numero}_canal_2" placeholder="Canal"></td>
                        <td><input type="text" name="etapa_${etapa.numero}_interaccion_2" placeholder="Interacción"></td>
                        <td>
                            <select name="etapa_${etapa.numero}_importancia_2">
                                <option value="">Seleccionar</option>
                                <option value="alta">Alta</option>
                                <option value="media">Media</option>
                                <option value="baja">Baja</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="form-group">
            <label><i class="fas fa-theater-masks"></i> Emociones y Pensamientos:</label>
            <textarea name="etapa_${etapa.numero}_emociones" placeholder="Emociones" rows="2"></textarea>
            <textarea name="etapa_${etapa.numero}_pensamientos" placeholder="Pensamientos" rows="2" style="margin-top: 0.5rem;"></textarea>
            
            <div style="margin-top: 1rem;">
                <label>Nivel de confianza:</label>
                <div class="confidence-scale">
                    <label><input type="radio" name="etapa_${etapa.numero}_confianza" value="alto"> Alto</label>
                    <label><input type="radio" name="etapa_${etapa.numero}_confianza" value="medio"> Medio</label>
                    <label><input type="radio" name="etapa_${etapa.numero}_confianza" value="bajo"> Bajo</label>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label><i class="fas fa-exclamation-triangle"></i> Puntos de Dolor (Pain Points):</label>
            <textarea name="etapa_${etapa.numero}_pain_points" placeholder="¿Qué frustra o molesta al usuario en esta etapa?" rows="2"></textarea>
        </div>

        <div class="form-group">
            <label><i class="fas fa-lightbulb"></i> Oportunidades de Mejora:</label>
            <textarea name="etapa_${etapa.numero}_oportunidades" placeholder="¿Cómo podemos mejorar esta etapa?" rows="2"></textarea>
        </div>
    `;

    return etapaDiv;
}

function addMomento() {
    const container = document.getElementById('momentosCriticos');
    if (!container) return;

    const momentoDiv = document.createElement('div');
    momentoDiv.className = 'momento-item fade-in';
    momentoDiv.innerHTML = `
        <input type="text" placeholder="Momento" name="momento">
        <select name="etapa-momento">
            <option value="">Seleccionar etapa</option>
            <option value="awareness">Awareness</option>
            <option value="consideration">Consideration</option>
            <option value="decision">Decision</option>
            <option value="purchase">Purchase/Onboarding</option>
            <option value="usage">Usage</option>
            <option value="advocacy">Advocacy</option>
        </select>
        <select name="impacto">
            <option value="">Impacto</option>
            <option value="alto">Alto</option>
            <option value="medio">Medio</option>
            <option value="bajo">Bajo</option>
        </select>
        <input type="text" placeholder="Acción Requerida" name="accion">
    `;

    container.appendChild(momentoDiv);
}

function handleSubmit(event) {
    event.preventDefault();
    
    // Recopilar datos del formulario
    const formData = new FormData(event.target);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        if (data[key]) {
            if (Array.isArray(data[key])) {
                data[key].push(value);
            } else {
                data[key] = [data[key], value];
            }
        } else {
            data[key] = value;
        }
    }

    // Mostrar confirmación
    alert('Journey Map guardado exitosamente!');
    console.log('Datos del Journey Map:', data);
}

function exportData() {
    const form = document.getElementById('customerJourneyForm');
    if (!form) return;

    const formData = new FormData(form);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        if (data[key]) {
            if (Array.isArray(data[key])) {
                data[key].push(value);
            } else {
                data[key] = [data[key], value];
            }
        } else {
            data[key] = value;
        }
    }

    // Crear archivo JSON para descargar
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'customer-journey-map.json';
    link.click();
}

// Función para mostrar/ocultar secciones
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
}

// Validación en tiempo real
document.addEventListener('input', function(event) {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        if (event.target.value.length > 0) {
            event.target.style.borderColor = '#28a745';
        } else {
            event.target.style.borderColor = '#e9ecef';
        }
    }
});
