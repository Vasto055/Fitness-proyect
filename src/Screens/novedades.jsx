import { useState } from "react";

export default function Novedades() {
  const [sections, setSections] = useState([]);

  // Función para cargar las secciones desde el backend
  const fetchSections = () => {
    fetch("http://localhost:8080/api/data")
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos recibidos:", data);
        setSections(data);
      })
      .catch((error) => console.error("Error al obtener datos:", error));
  };

 

  // Función para eliminar una sección
  const deleteSection = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar esta sección?")) return;

    try {
      const response = await fetch(`http://localhost:8080/api/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Sección eliminada correctamente.");
        fetchSections(); // Recargar la lista
      } else {
        alert("Error al eliminar la sección.");
      }
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <center>
      <h1 className="text-2xl font-bold mb-6 XD">¡¡Novedades!!</h1>S
      </center>

      {sections.length === 0 ? (
        <p className="text-white">No hay novedades disponibles.</p>
      ) : (
        sections.map((section) => (
          <div key={section.id} className="bg-white shadow-lg rounded-xl p-4 mb-6 w-80">
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <p className="text-gray-600">{section.text}</p>
            <img style={{ maxHeight: 600, objectFit: "cover", objectPosition: "center" }}
              src={section.imageUrl}
              alt="Imagen de sección"
              className="rounded-lg mt-4 w-full"
            /> <br></br>
            <button
            security="true"
            style={{ background: "black", border: "2px solid black", padding: "5px 10px", borderRadius: "5px"}}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => deleteSection(section.id)}
            >
              Eliminar  
            </button>
          </div>
        ))
      )}
    </div>
  );
}
