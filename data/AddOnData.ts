export type AddOn = {
  type: string;
  title: {
    en: string;
    es: string;
  };
  price: number;
  description: {
    en: string;
    es: string;
  };
};

export const AddOnData: AddOn[] = [
  {
    type: 'Assistance',
    title: {
      en: 'Domain Assistance',
      es: 'Asistencia con el Dominio',
    },
    price: 50,
    description: {
      en: 'Help choosing a suitable domain name, comparing domain registrars, and guiding you through purchasing a domain for your website. This fee covers my assistance only; domain registration fees are paid separately by you.',
      es: 'Ayuda para elegir un nombre de dominio adecuado, comparar registradores y orientarte durante la compra de un dominio para tu sitio web. Esta tarifa cubre únicamente mi servicio de asesoría; tú pagas por separado el registro del dominio.',
    },
  },

  {
    type: 'Assistance',
    title: {
      en: 'Hosting Assistance',
      es: 'Asistencia con el Hosting',
    },
    price: 50,
    description: {
      en: 'Help finding and comparing hosting providers, recommending a suitable plan, and guiding you through purchasing a hosting service. This fee covers my assistance only; hosting fees are paid separately by you.',
      es: 'Ayuda para encontrar y comparar proveedores de hosting, recomendarte un plan adecuado y orientarte durante la compra del servicio. Esta tarifa cubre únicamente mi servicio de asesoría; tú pagas por separado el hosting.',
    },
  },

  {
    type: 'Assistance',
    title: {
      en: 'Domain + Hosting',
      es: 'Dominio + Hosting',
    },
    price: 80,
    description: {
      en: 'Help choosing a domain and hosting provider, recommending suitable options, and guiding you through purchasing both services. This fee covers my assistance only; domain registration and hosting fees are paid separately by you.',
      es: 'Ayuda para elegir un dominio y un proveedor de hosting, recomendarte opciones adecuadas y orientarte durante la compra de ambos servicios. Esta tarifa cubre únicamente mi servicio de asesoría; tú pagas por separado el dominio y el hosting.',
    },
  },

  {
    type: 'Managed',
    title: {
      en: 'Hosting',
      es: 'Hosting',
    },
    price: 40,
    description: {
      en: 'Managed website hosting, deployment, and technical configuration. I will handle deploying your website and managing its hosting setup. My fee covers the management service only; hosting provider fees are paid separately by you.',
      es: 'Hosting administrado, despliegue y configuración técnica de tu sitio web. Me encargaré de desplegar tu sitio y gestionar su configuración de hosting. Mi tarifa cubre únicamente el servicio de gestión; tú pagas por separado las tarifas del proveedor de hosting.',
    },
  },

  {
    type: 'Managed',
    title: {
      en: 'Maintenance',
      es: 'Mantenimiento',
    },
    price: 40,
    description: {
      en: 'Minor ongoing website content updates, such as changing images, updating text, modifying business information, adding events, and making other small content changes. New features, major design changes, and larger development tasks are not included.',
      es: 'Actualizaciones menores y continuas del contenido del sitio web, como cambiar imágenes, actualizar textos, modificar información del negocio, agregar eventos y realizar otros pequeños cambios. No incluye nuevas funcionalidades, cambios importantes de diseño ni tareas de desarrollo más complejas.',
    },
  },

  {
    type: 'Managed',
    title: {
      en: 'Hosting + Maintenance',
      es: 'Hosting + Mantenimiento',
    },
    price: 70,
    description: {
      en: 'Managed website hosting, deployment, and technical configuration, plus minor ongoing website content updates. My fee covers these services only; hosting provider fees are paid separately by you. New features and major development work are not included.',
      es: 'Hosting administrado, despliegue y configuración técnica del sitio web, además de pequeñas actualizaciones continuas de contenido. Mi tarifa cubre únicamente estos servicios; tú pagas por separado las tarifas del proveedor de hosting. No incluye nuevas funcionalidades ni trabajos de desarrollo importantes.',
    },
  },
];
