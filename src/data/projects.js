export const projects = [
  {
    slug: "tickeria",
    title: "Tickeria",
    subtitle: "Event ticketing and event calendar platform for Yogyakarta City",
    description:
      "Tickeria is a web-based ticketing and event calendar platform designed to help users discover events, purchase tickets, and manage their tickets digitally. The platform also provides organizer and admin functionality for managing events, tickets, transactions, and event attendance.",

    category: "Full Stack / DevOps",

    thumbnail: "/projects/tickeria/thumb.png",

    technologies: [
      "Go",
      "Fiber",
      "React",
      "Vite",
      "MySQL",
      "GORM",
      "JWT",
      "Docker",
      "Cloudinary",
      "Swagger",
      "Git",
      "Kubernetes",
      "ArgoCD",

    ],

    gallery: [
      {
        src: "/projects/tickeria/home.png",
        alt: "Tickeria homepage",
        caption: "Tickeria homepage for discovering available events",
      },
      {
        src: "/projects/tickeria/calender.png",
        alt: "Tickeria event calender",
        caption:
          "Event calender visualisation page containing events schedule",
      },
      {
        src: "/projects/tickeria/event-detail.png",
        alt: "Tickeria event detail page",
        caption:
          "Event detail page containing event information, schedule, location, and ticket availability",
      },
      {
        src: "/projects/tickeria/event-detail2.png",
        alt: "Tickeria event detail page 2",
        caption:
          "Event detail page containing event information, schedule, location, and ticket availability",
      },

      {
        src: "/projects/tickeria/ticket.png",
        alt: "Tickeria ticket page",
        caption:
          "Digital ticket containing information and QR code for event verification",
      },
      {
        src: "/projects/tickeria/dashboard.png",
        alt: "Tickeria dashboard",
        caption:
          "Dashboard for managing event and ticket-related information",
      },
      {
        src: "/projects/tickeria/checkin.png",
        alt: "Tickeria ticket check-in",
        caption:
          "QR code ticket verification and check-in process for event organizers",
      },
    ],

    architecture: {
      image: "/projects/tickeria/architecture.png",
      description:
        "Tickeria uses a web-based frontend and backend architecture. The frontend provides the user interface for authentication, event discovery, ticket purchasing, and ticket management. The backend API is developed using Golang and Fiber and acts as the main layer connecting the frontend with the MySQL database and external services. GORM is used as the ORM for database interaction, while JWT is used for authentication and authorization. Cloudinary is used for image and media storage.",
    },

    implementation: {
      authentication: {
        title: "Authentication & Authorization",
        content:
          "Implemented authentication functionality for registration and login. JWT is used to maintain authenticated sessions and control access to functionality based on user roles such as user, organizer, and admin.",
        commands: [
          "POST /api/auth/register",
          "POST /api/auth/login",
        ],
      },

      backend: {
        title: "Backend API",
        content:
          "Developed the backend API using Golang and the Fiber framework. The backend handles request processing, validation, business logic, database interaction, and JSON responses. The backend follows a simple layered architecture with handlers, middleware, models, routes, configuration, and utility components.",
        commands: [
          "go mod download",
          "go run main.go",
        ],
      },

      database: {
        title: "Database & ORM",
        content:
          "Designed and implemented the application database using MySQL. GORM is used as the Object Relational Mapping layer to represent database entities, relationships, primary keys, and foreign keys in Go models.",
        commands: [
          "mysql -u root -p",
          "SHOW DATABASES;",
        ],
      },

      eventManagement: {
        title: "Event Management",
        content:
          "Implemented event management functionality for organizers and administrators. The system supports creating, updating, and deleting event information and managing event-related data.",
        commands: [
          "POST /api/events",
          "GET /api/events",
          "PUT /api/events/:id",
          "DELETE /api/events/:id",
        ],
      },

      ticketing: {
        title: "Ticketing System",
        content:
          "Implemented the ticketing workflow including ticket selection, ordering, ticket availability, and purchase processing. The system also manages ticket stock to prevent invalid ticket availability.",
        commands: [
          "GET /api/events/:id/tickets",
          "POST /api/orders",
        ],
      },

      payment: {
        title: "Payment Gateway Integration",
        content:
          "Integrated a payment gateway into the ticket purchasing workflow so users can process ticket transactions and receive the corresponding transaction status.",
        commands: [
          "POST /api/payment",
          "GET /api/payment/status/:id",
        ],
      },

      qrVerification: {
        title: "QR Code Ticket Verification",
        content:
          "Implemented digital ticket verification using QR codes. Organizers can scan the QR code associated with a ticket and verify whether the ticket is valid before marking it as checked-in.",
        commands: [
          "QR Code Generation",
          "QR Code Scan",
          "Ticket Validation",
        ],
      },

      mediaStorage: {
        title: "Image & Media Storage",
        content:
          "Integrated Cloudinary for storing and managing images and media used by the application, including event-related assets.",
        commands: [
          "Upload image",
          "Store Cloudinary URL",
          "Retrieve media URL",
        ],
      },

      apiDocumentation: {
        title: "API Documentation",
        content:
          "Provided API documentation using Swagger to make backend endpoints easier to inspect, test, and integrate with the frontend.",
        commands: [
          "Swagger API Documentation",
          "API Endpoint Testing",
        ],
      },

      containerization: {
        title: "Containerization",
        content:
          "Containerized the backend application using Docker to provide a consistent application runtime environment and simplify deployment.",
        commands: [
          "docker build -t tickeria-backend .",
          "docker run tickeria-backend",
        ],
      },

      cicd: {
        title: "CI/CD",
        content:
          "Prepared CI/CD configuration using Cloud Build through the cloudbuild.yaml configuration file to support automated application build and delivery workflows.",
        commands: [
          "gcloud builds submit",
          "cloudbuild.yaml",
        ],
      },

      frontend: {
        title: "Frontend Application",
        content:
          "Developed frontend functionality for user interaction with the Tickeria platform, including authentication, event discovery, event details, ticket purchasing, and ticket management.",
        commands: [
          "npm install",
          "npm run dev",
          "npm run build",
        ],
      },
    },

    challenges: [
      {
        title: "Designing the Application Database",
        problem:
          "The ticketing platform contains multiple entities and relationships such as users, organizers, events, event categories, tickets, and transactions.",
        investigation:
          "Analyzed application requirements and translated the required entities and relationships into an Entity Relationship Diagram.",
        rootCause:
          "The application requires structured relationships between different business entities to maintain consistent data.",
        solution:
          "Designed the ERD and implemented the resulting database structure using MySQL and GORM models.",
        result:
          "The application can manage its event and ticketing data using a structured relational database.",
        lessonLearned:
          "Database design should be considered together with application requirements and business relationships.",
      },

{
    title: "Adapting the system to evolving requirements",

    problem:
      "Tickeria was developed using an Agile SDLC with two-week sprints. At the end of each sprint, the team presented the application to the client, represented by a mentor, and received frequent feedback. Some requirements were minor UI changes, while others introduced new features or required significant changes to the existing system architecture.",

    investigation:
      "Evaluated how each new requirement affected the existing architecture, application flow, database structure, API contracts, and user experience. The team also identified potential edge cases and dependencies before implementing changes.",

    solution:
      "Continuously refined the system design and application architecture based on sprint feedback, while considering extensibility, edge cases, data flow, and the impact of changes across frontend, backend, and infrastructure components.",

    result:
      "The team became more capable of handling changing requirements without treating every request as an isolated feature. Changes were evaluated based on their impact on the overall system rather than only on the immediate implementation.",

    lessonLearned:
      "Learned the importance of anticipating edge cases and understanding the system as a whole before implementing changes. The project strengthened our understanding of system analysis, system design, architecture, API and data flow, and the importance of building software that can adapt to evolving requirements."
  },

  {
    title: "Integrating a real payment gateway",

    problem:
      "The Tickeria mini challenge required the application to use a real payment gateway instead of a simulated payment flow, introducing additional requirements around payment processing, transaction status, security, and asynchronous communication.",

    investigation:
      "Studied the Midtrans integration flow, including payment creation, transaction status handling, webhook notifications, API integration, and the interaction between the payment gateway and the backend.",

    solution:
      "Integrated Midtrans as the payment gateway and implemented backend handling for payment transactions and webhook notifications. The payment flow was designed to handle asynchronous payment status updates and unexpected cases rather than relying only on the response from the initial payment request.",

    result:
      "Tickeria was able to process payments through a real payment gateway and receive transaction status updates through webhook callbacks, providing a more realistic end-to-end payment flow.",

    lessonLearned:
      "Learned how real-world payment integrations differ from simple request-response APIs, particularly the importance of webhooks, asynchronous processing, transaction state management, security, and robust handling of edge cases such as duplicate or unexpected notifications."
  },

      {
        title: "Ticket Verification",
        problem:
          "Purchased tickets need to be verified efficiently when users arrive at an event.",
        investigation:
          "Designed a digital ticket workflow where each ticket contains a QR code that can be scanned by the organizer.",
        rootCause:
          "Manual ticket verification can be inefficient and difficult to manage during an event.",
        solution:
          "Implemented QR code-based ticket verification and check-in functionality.",
        result:
          "Organizers can verify tickets digitally during event check-in.",
        lessonLearned:
          "Digital verification can simplify event operations and reduce manual ticket checking.",
      },

    ],

    metrics: [
      {
        value: "Go",
        label: "Backend",
      },
      {
        value: "React",
        label: "Frontend",
      },
      {
        value: "MySQL",
        label: "Database",
      },
      {
        value: "JWT",
        label: "Authentication",
      },
      {
        value: "Docker",
        label: "Containerization",
      },
      {
        value: "Swagger",
        label: "API Documentation",
      },
    ],

      links: [
        {
          type: "github",
          label: "Backend Repo",
          url: "https://github.com/RaflyAdiyasa/Ticketing-Backend",
        },
        {
          type: "github",
          label: "Frontend Repo",
          url: "https://github.com/RaflyAdiyasa/Ticketing-Frontend",
        },
        {
          type: "github",
          label: "GitOps Repo",
          url: "https://github.com/RaflyAdiyasa/tickeria-gitops",
        },
        {
          type: "github",
          label: "Jenkins Shared Library",
          url: "https://github.com/RaflyAdiyasa/shared-library",
        },
    ],

    deployment: {
      description: "The application is deployed on a Kubernetes cluster using Kind, following GitOps principles with Argo CD. Deployment and infrastructure configurations are managed declaratively through a GitHub repository, covering three deployments (frontend, backend, and MySQL database), services, persistent storage, horizontal pod autoscaling, and network policies for controlling communication between workloads.",
      stack: [
        "Kubernetes",
        "ArgoCD",
        "GitHub",
        "Jenkins",
      ],

    images: [
      {
        src: "/projects/tickeria/deployment-1.png",
        alt: "Kubernetes deployment dashboard",
        caption: "Kubernetes cluster showing Tickeria pods running",
      },
      {
        src: "/projects/tickeria/deployment-2.png",
        alt: "ArgoCD application sync status",
        caption: "ArgoCD showing successful application synchronization",
      },
    ],

    links: [
        {
          type: "github",
          label: "Backend Repo",
          url: "https://github.com/RaflyAdiyasa/Ticketing-Backend",
        },
        {
          type: "github",
          label: "Frontend Repo",
          url: "https://github.com/RaflyAdiyasa/Ticketing-Frontend",
        },
        {
          type: "github",
          label: "GitOps Repo",
          url: "https://github.com/RaflyAdiyasa/tickeria-gitops",
        },
        {
          type: "github",
          label: "Jenkins Shared Library",
          url: "https://github.com/RaflyAdiyasa/shared-library",
        },
      ],
    },

    github: "https://github.com/RaflyAdiyasa/tickeria-gitops",

    demo: "",
  },
  
  {
    slug: "tickeria-helm-chart",
    title: "Tickeria Helm Chart",
    subtitle:
      "Reusable Helm Chart for deploying Tickeria and its MySQL dependency on Kubernetes",

    description:
      "A Helm-based deployment project for packaging the Tickeria application into a reusable Kubernetes chart. The chart manages the frontend and backend workloads while using the Bitnami MySQL Helm Chart as a dependency for the database layer. It demonstrates Helm templating, values-driven configuration, Kubernetes Secrets, persistent storage, StatefulSets, service discovery, and chart validation.",

    category: "DevOps / Kubernetes",

    thumbnail: "/projects/tickeria-helm-chart/thumb.png",

    technologies: [
      "Kubernetes",
      "Helm",
      "Bitnami MySQL",
      "Docker",
      "YAML",
      "Kubernetes Secrets",
    ],

    gallery: [
      {
        src: "/projects/tickeria-helm-chart/helm-structure.png",
        alt: "Tickeria Helm chart directory structure",
        caption:
          "Helm chart structure containing templates, values, and the Bitnami MySQL dependency.",
      },
      {
        src: "/projects/tickeria-helm-chart/helm-template.png",
        alt: "Rendered Tickeria Kubernetes manifests",
        caption:
          "Rendered Kubernetes manifests generated from the Tickeria Helm Chart.",
      },
      {
        src: "/projects/tickeria-helm-chart/kubernetes.png",
        alt: "Tickeria workloads running on Kubernetes",
        caption:
          "Tickeria frontend, backend, and MySQL workloads running in the Kubernetes cluster.",
      },
    ],

    architecture: {
      image: "/projects/tickeria-helm-chart/architecture.png",
      description:
        "The Helm Chart packages the Tickeria frontend and backend deployments together with a Bitnami MySQL dependency. The backend communicates with MySQL through the ClusterIP service generated by the MySQL subchart, while MySQL runs as a StatefulSet with persistent storage. Database credentials are provided through Kubernetes Secrets and shared between the MySQL dependency and backend application.",
    },

    implementation: {
      helmPackaging: {
        title: "Helm Chart Packaging",
        content:
          "Packaged the Tickeria Kubernetes resources into a Helm Chart using templates and values-driven configuration. Deployment settings such as image repositories, tags, replica counts, resources, and database configuration can be customized through values.yaml.",
        commands: [
          "helm lint ./tickeria",
          "helm template tickeria ./tickeria",
          "helm upgrade --install tickeria ./tickeria",
        ],
      },

      mysqlDependency: {
        title: "Bitnami MySQL Dependency",
        content:
          "Integrated the Bitnami MySQL Helm Chart as a chart dependency instead of maintaining a custom MySQL StatefulSet. The dependency provides the MySQL StatefulSet, ClusterIP Service, headless Service, persistent storage, and database configuration.",
        commands: [
          "helm dependency update ./tickeria",
          "helm dependency list ./tickeria",
        ],
      },

      configuration: {
        title: "Values-driven Configuration",
        content:
          "Centralized application and database configuration in values.yaml. The parent chart passes MySQL-specific configuration through the mysql values namespace while backend configuration references the same database settings.",
        commands: [
          "helm template tickeria ./tickeria",
          "helm template tickeria ./tickeria | grep 'image:'",
        ],
      },

      secrets: {
        title: "Kubernetes Secret Management",
        content:
          "Moved database credentials from application configuration into Kubernetes Secrets. The same Secret is consumed by the Bitnami MySQL dependency and the backend through secretKeyRef, keeping database credentials out of Deployment manifests.",
        commands: [
          "kubectl get secret tickeria-db-secret",
          "kubectl describe pod tickeria-mysql-0",
        ],
      },

      databaseNetworking: {
        title: "Database Service Discovery",
        content:
          "Configured the backend to communicate with MySQL through the Kubernetes ClusterIP Service instead of using a Pod IP. The backend connects to tickeria-mysql on port 3306, while the MySQL headless Service is used by the StatefulSet for pod identity.",
        commands: [
          "kubectl get svc",
          "kubectl get endpoints tickeria-mysql",
        ],
      },

      persistentStorage: {
        title: "Persistent MySQL Storage",
        content:
          "Configured persistent storage for MySQL through the Bitnami MySQL dependency. The database runs as a StatefulSet with a persistent volume claim so database data can survive pod recreation.",
        commands: [
          "kubectl get pvc",
          "kubectl get statefulset",
        ],
      },

      validation: {
        title: "Helm Validation and Dry Run",
        content:
          "Validated the generated Kubernetes resources before deployment using Helm linting, template rendering, and Kubernetes server-side dry-run validation.",
        commands: [
          "helm lint ./tickeria",
          "helm template tickeria ./tickeria",
          "helm template tickeria ./tickeria | kubectl apply --dry-run=server -f -",
        ],
      },
    },

    challenges: [
      {
        title: "Bitnami MySQL Image Availability",
        problem:
          "The Bitnami MySQL dependency rendered an image tag that was no longer available from the Docker registry, causing the MySQL pod to enter ImagePullBackOff.",
        investigation:
          "Inspected the generated StatefulSet using helm template and verified the exact image reference being used by both the MySQL container and its init container. The image was also tested directly using docker pull.",
        rootCause:
          "The Helm Chart dependency referenced a Bitnami MySQL image tag that was not available in the registry.",
        solution:
          "Investigated the dependency version and image configuration instead of modifying the generated dependency templates directly.",
        result:
          "The issue was isolated to the dependency image reference rather than Kubernetes networking or the application deployment.",
        lessonLearned:
          "Helm Chart versions and container image versions are separate concerns, and a chart's default image reference should still be verified against the current container registry.",
      },

      {
        title: "Database Authentication Configuration",
        problem:
          "The backend could reach the MySQL Service but failed authentication with an error indicating that no password was being provided.",
        investigation:
          "Compared the environment variables used by the previous Kubernetes deployment with the variables generated by the Helm template.",
        rootCause:
          "The previous application configuration used DB_PASS while the initial Helm template provided DB_PASSWORD. The Go application still expected DB_PASS.",
        solution:
          "Aligned the Helm-generated environment variable with the environment variable expected by the backend application and sourced its value from the Kubernetes Secret.",
        result:
          "The backend was able to receive the database password through secretKeyRef while keeping the credential out of the ConfigMap.",
        lessonLearned:
          "When migrating an existing workload to Helm, the application's existing configuration contract must remain consistent with the generated Kubernetes environment variables.",
      },
    ],

    metrics: [
      {
        value: "1",
        label: "Reusable Helm Chart",
      },
      {
        value: "1",
        label: "Bitnami MySQL Dependency",
      },
      {
        value: "StatefulSet",
        label: "Persistent Database",
      },
      {
        value: "GitOps Ready",
        label: "Deployment Model",
      },
    ],

    github: "https://github.com/RaflyAdiyasa/tickeria-chart",
    demo: "",
  },

  {
    slug: "assigngo",
    title: "AssignGO",
    subtitle: "Application platform with cloud infrastructure and automated CI/CD",
    description:
      "A web application supported by cloud infrastructure on Google Cloud Platform, with infrastructure provisioning through Terraform and automated build and deployment using Cloud Build.",
    category: "Cloud / DevOps",

    thumbnail: "/projects/assigngo/thumb.png",

    technologies: [
      "Node.js",
      "Terraform",
      "Google Cloud Platform",
      "Cloud Build",
      "MySQL",
      "PostgreSQL",
    ],

    gallery: [
      {
        src: "/projects/assigngo/application.png",
        alt: "AssignGO application",
        caption: "AssignGO application interface",
      },
      {
        src: "/projects/assigngo/terraform.png",
        alt: "Terraform infrastructure configuration",
        caption: "Infrastructure provisioning using Terraform",
      },
      {
        src: "/projects/assigngo/cloud-build.png",
        alt: "Google Cloud Build pipeline",
        caption: "Automated CI/CD pipeline using Cloud Build",
      },
    ],

    architecture: {
      image: "/projects/assigngo/architecture.png",
      description:
        "The application uses Node.js APIs with cloud infrastructure provisioned using Terraform. Google Cloud services are used to support the application and managed database infrastructure, while Cloud Build automates the build and deployment workflow.",
    },

    implementation: {
      infrastructure: {
        title: "Infrastructure as Code",
        content:
          "Provisioned cloud infrastructure using Terraform, including networking components and managed database resources. Infrastructure configuration was defined as code to make the environment reproducible and easier to maintain.",
        commands: [
          "terraform init",
          "terraform plan",
          "terraform apply",
        ],
      },

      cicd: {
        title: "CI/CD Pipeline",
        content:
          "Implemented an automated CI/CD workflow using Google Cloud Build. The pipeline builds the application and automates the deployment process after changes are pushed to the repository.",
        commands: [
          "gcloud builds submit",
          "gcloud builds list",
        ],
      },

      backend: {
        title: "Backend API",
        content:
          "Developed backend APIs using Node.js and integrated the application with relational databases including MySQL and PostgreSQL.",
        commands: [
          "npm install",
          "npm run build",
          "npm start",
        ],
      },
    },

    challenges: [
      
  {
    title: "Managing frequent frontend changes on a deployed application",

    problem:
      "During development, the frontend team frequently changed the application code while the application was already deployed on Google Cloud. The frontend was required to run on a Compute Engine VM, making repeated manual deployment and environment setup time-consuming.",

    investigation:
      "Reviewed the existing deployment architecture and identified that the frontend VM and database environment required repeated configuration whenever changes needed to be deployed. The backend already used a managed deployment service with CI/CD, while the frontend deployment process remained largely manual.",

    rootCause: "...",

    solution:
      "Used Terraform to provision the frontend Compute Engine VM and a dedicated SQL VM, together with an initialization script to automatically prepare the environment and deploy the frontend application. The SQL server was self-hosted on a VM to reduce infrastructure costs while keeping the application components within the same Google Cloud environment.",

    result:
      "Frontend infrastructure could be provisioned consistently through Terraform, significantly reducing repetitive manual VM setup and deployment work. The architecture also provided a more cost-conscious solution by running the SQL server on a dedicated VM instead of using a more expensive managed database service.",

    lessonLearned:
      "Learned how Infrastructure as Code can make cloud infrastructure reproducible and easier to maintain, especially when application changes require frequent redeployment. Also gained practical experience provisioning Compute Engine resources with Terraform, automating application deployment through VM startup scripts, and evaluating the trade-offs between managed cloud services and self-hosted infrastructure."
  },
    ],

    metrics: [
      {
        value: "IaC",
        label: "Terraform",
      },
      {
        value: "CI/CD",
        label: "Cloud Build",
      },
      {
        value: "GCP",
        label: "Cloud Infrastructure",
      },
    ],

         links: [
        {
          type: "github",
          label: "Backend Repo 1",
          url: "https://github.com/RaflyAdiyasa/Assign_Go_Mail_Service",
        },
        {
          type: "github",
          label: "Backend Repo 2",
          url: "https://github.com/RaflyAdiyasa/Assign_Go_User_Service",
        },
        {
          type: "github",
          label: "Frontend Repo ",
          url: "https://github.com/RaflyAdiyasa/Assign_Go_Fe",
        },
    ],

    deployment: {
      description: `The application is deployed using a CI/CD pipeline on Google Cloud, with GitHub as the source code repository. Source code changes trigger an automated build process using Google Cloud Build, which builds the application into a Docker container image and pushes it to Google Artifact Registry.

    The containerized application is then deployed to Google Cloud Run and Google App Engine, leveraging serverless infrastructure to run the application without managing underlying servers. This setup provides an automated deployment workflow, containerized application delivery, and scalable serverless infrastructure.`,
      stack: [
        "GCP",
        "Docker",
        "GitHub",
        "Cloud Build",
        "Cloud Run",
        "App Engine",
        "Artifact Registry",
      ],

    images: [
      // {
      //   src: "/projects/assigngo/deployment-1.png",
      //   alt: "Kubernetes deployment dashboard",
      //   caption: "Kubernetes cluster showing Tickeria pods running",
      // },
      // {
      //   src: "/projects/assigngo/deployment-2.png",
      //   alt: "ArgoCD application sync status",
      //   caption: "ArgoCD showing successful application synchronization",
      // },
    ],

    links: [
        {
          type: "github",
          label: "Backend Repo 1",
          url: "https://github.com/RaflyAdiyasa/Assign_Go_Mail_Service",
        },
        {
          type: "github",
          label: "Backend Repo 2",
          url: "https://github.com/RaflyAdiyasa/Assign_Go_User_Service",
        },
        {
          type: "github",
          label: "Frontend Repo ",
          url: "https://github.com/RaflyAdiyasa/Assign_Go_Fe",
        },
        
      ],
    },


    github: "https://github.com/RaflyAdiyasa/Assign_Go_Mail_Service",
    demo: "",
  },

  {
    slug: "helpdesk-ticketing-api",
    title: "Helpdesk Ticketing API",
    subtitle: "Containerized backend API with monitoring and health checks",
    description:
      "A personal project built to explore and gain hands-on experience with various backend, infrastructure, and DevOps technologies. The project consists of a helpdesk ticketing backend API developed with Go and Fiber, integrated with MySQL, Redis, and MinIO for data persistence, caching, and object storage. It is containerized using Docker and equipped with application observability using Prometheus and Grafana.",
    category: "Backend / DevOps",

    thumbnail: "/projects/helpdesk-ticketing/thumb.png",

    technologies: [
      "Go",
      "Fiber",
      "GORM",
      "MySQL",
      "Redis",
      "MinIO",
      "Docker",
      "Docker Compose",
      "Prometheus",
      "Grafana",
      "Node Exporter",
      "Redis Exporter",
    ],

    gallery: [
      {
        src: "/projects/helpdesk-ticketing/swagger.png",
        alt: "Helpdesk Ticketing API documentation",
        caption: "API documentation and endpoint testing",
      },
      {
        src: "/projects/helpdesk-ticketing/docker.png",
        alt: "Docker Compose environment",
        caption: "Containerized application environment",
      },
      {
        src: "/projects/helpdesk-ticketing/grafana.png",
        alt: "Grafana monitoring dashboard",
        caption: "Application and infrastructure monitoring",
      },
      {
        src: "/projects/helpdesk-ticketing/prometheus.png",
        alt: "Prometheus monitoring",
        caption: "Metrics collection using Prometheus",
      },
    ],

    architecture: {
      image: "/projects/helpdesk-ticketing/architecture.png",
      description:
        "The backend API is built with Go and Fiber and communicates with MySQL for persistent data, Redis for caching or supporting application operations, and MinIO for object/file storage. The application is containerized with Docker Compose and monitored using Prometheus, Grafana, and exporters.",
    },

    implementation: {
      backend: {
        title: "Backend API",
        content:
          "Developed a REST API using Go and Fiber with a structured application architecture. GORM is used for database interaction and Swagger is used for API documentation.",
        commands: [
          "go mod download",
          "go run .",
        ],
      },

      containerization: {
        title: "Containerization",
        content:
          "Containerized the backend application and its supporting services using Docker Compose, including MySQL, Redis, and MinIO.",
        commands: [
          "docker compose build",
          "docker compose up -d",
          "docker compose ps",
        ],
      },

      health: {
        title: "Health & Readiness",
        content:
          "Implemented health and readiness endpoints so the application state can be checked by infrastructure and deployment tooling.",
        commands: [
          "curl http://localhost:8080/health",
          "curl http://localhost:8080/readiness",
        ],
      },

      observability: {
        title: "Monitoring & Observability",
        content:
          "Integrated Prometheus and Grafana for monitoring. Node Exporter and Redis Exporter are used to expose infrastructure and Redis metrics for visualization and troubleshooting.",
        commands: [
          "docker compose up -d prometheus grafana",
          "curl http://localhost:9090",
        ],
      },

      storage: {
        title: "Object Storage",
        content:
          "Integrated MinIO as an S3-compatible object storage service for handling application files.",
        commands: [
          "docker compose up -d minio",
        ],
      },
    },

     
    challenges: [
      {
        title: "Automating a multi-service development environment",

        problem:
          "The Helpdesk application depends on multiple infrastructure components, including MySQL, Redis, and MinIO, making the application difficult to run and configure consistently when each dependency is managed manually.",

        investigation:
          "Studied how each infrastructure component works and how the application interacts with MySQL, Redis, and MinIO. The monitoring stack also introduced additional components such as Prometheus, Grafana, Node Exporter, and Redis Exporter, requiring an understanding of their roles, configurations, and communication flow.",

        solution:
          "Containerized the application and its infrastructure dependencies using Docker Compose. Configuration files and required settings were mounted into containers through volumes, allowing services to initialize with their required configuration and reducing manual setup steps.",

        result:
          "The complete Helpdesk development and monitoring environment can be initialized from scratch using Docker Compose, including the application, database, cache, object storage, and monitoring components.",

        lessonLearned:
          "Learned how multiple infrastructure components work together as a system rather than as isolated services. The project strengthened my understanding of MySQL, Redis, MinIO, Prometheus, Grafana, Node Exporter, and Redis Exporter, while demonstrating how Docker Compose can automate and make complex multi-service environments reproducible."
      },

      {
        title: "Building a custom application monitoring dashboard",

        problem:
          "The initial Grafana dashboards were not well suited for monitoring the custom Go API. While existing templates worked for infrastructure components such as Node Exporter and Redis Exporter, they did not provide the application-specific visibility needed for the API.",

        investigation:
          "Studied Prometheus metrics exposed by the Go application and learned PromQL to understand, filter, aggregate, and visualize application metrics. Identified the metrics that were most useful for understanding API behavior and runtime performance.",

        solution:
          "Designed and built a custom Grafana dashboard specifically for the Go API using PromQL queries, while continuing to use existing dashboard templates for standard infrastructure metrics.",

        result:
          "The monitoring stack provides both infrastructure-level visibility through existing exporter dashboards and application-level visibility through a custom dashboard tailored to the Go API.",

        lessonLearned:
          "Learned that effective observability is not only about collecting metrics, but also about presenting the right information for a specific system. This project strengthened my understanding of Prometheus metrics, PromQL, Grafana dashboards, and the difference between infrastructure monitoring and application observability."
      },
    ],



    metrics: [
      {
        value: "Go",
        label: "Backend",
      },
      {
        value: "Docker",
        label: "Containerization",
      },
      {
        value: "Prometheus",
        label: "Metrics",
      },
      {
        value: "Grafana",
        label: "Visualization",
      },
    ],

    links: [
      {
        type: "github",
        label: "Source Code",
        url: "https://github.com/RaflyAdiyasa/Helpdesk-Ticketing-API",
      },
      {
        type: "github",
        label: "Gitops Repo",
        url: "https://github.com/RaflyAdiyasa/cocoa-gitops",
      },
      {
        type: "docker",
        label: "Docker Hub",
        url: "https://hub.docker.com/repositories/huan271",
      },
    ],

    // NEW: Deployment section
    deployment: {
      description: "Supports easy deployment using Docker Compose and Kubernetes through Argo CD and a GitOps workflow. The Kubernetes architecture includes MySQL and Redis StatefulSets with headless Services, as well as MinIO and the API deployed as Deployments with dedicated Services. Each stateful component is configured with persistent storage to ensure data durability across pod restarts and rescheduling.",
      stack: [
        "Docker",
        "Docker Compose",
        "Prometheus",
        "Grafana",
        "Kubernetes",
        "ArgoCd",
        "GitHub",
      ],
      links: [
        {
          type: "github",
          label: "Docker Compose",
          url: "https://github.com/RaflyAdiyasa/Helpdesk-Ticketing-API",
        },
         {
        type: "github",
        label: "Gitops Repo",
        url: "https://github.com/RaflyAdiyasa/cocoa-gitops",
      },
      ],
    },

    github: "https://github.com/RaflyAdiyasa/Helpdesk-Ticketing-Api",
    demo: "",
  },


  {
    slug: "Simple Go - Shrd Lib Pipeline Kube Argo Webhook",
    title: "Simple Go - Shrd Lib Pipeline Kube Argo Webhook",
    subtitle:
      "Pipeline CICD Shared Library Jenkin , from merge webhook to deploy Kubernetes ArgoCD",
  
    description:
  "A personal project focused on exploring Jenkins CI/CD pipelines using Groovy and Jenkins Shared Libraries. The pipeline is integrated with GitHub Webhooks and is automatically triggered when a Pull Request is merged into a designated deployment branch. After a successful build and container image push, Jenkins updates the image reference in the GitOps repository. Argo CD then detects the Git change, synchronizes the desired state, and deploys the updated application to the Kubernetes cluster.",


    category: "Kubernetes/ArgoCD",

    thumbnail: "/projects/simplego/thumb.png",

    technologies: [
      "Jenkins",
      "Jenkins Shared Library",
      "Kubernetes",
      "ArgoCD",
      "GitOps",
      "GitHub",
      "Envoy Gateway",
      "Groovy",
    ],

    gallery: [
      {
        src: "/projects/simplego/argocd1.png",
        alt: "argocd ui ",
        caption: "List application ",
      },
      {
        src: "/projects/simplego/argocd2.png",
        alt: "Argocd Ui",
        caption: "Aplication Detail",
      },
      {
        src: "/projects/simplego/Jenkins1.png",
        alt: "Jenkins",
        caption: "Run Pipeline",
      },
      {
        src: "/projects/simplego/pipeline.png",
        alt: "Jenkins",
        caption: "Pipeline using shared lib",
      },
            {
        src: "/projects/simplego/LogPipeline.png",
        alt: "Jenkins",
        caption: "Console Pipeline",
      },
      {
        src: "/projects/simplego/testEnvoy.png",
        alt: "Jenkins",
        caption: "test Envoy gateway acces pods",
      },
      // Add more gallery items if needed
    ],

    architecture: {
      image: "/projects/project-name/architecture.png",
      description:
        "Just Simple Golang Api app",
    },

    implementation: {
      feature1: {
        title: "Feature or Implementation 1",
        content:
          "Description of the implementation, configuration, or technical approach used.",
        commands: [
          "example command",
          "another example command",
        ],
      },

      feature2: {
        title: "Feature or Implementation 2",
        content:
          "Description of another important implementation or technical component.",
        commands: [
          "example command",
        ],
      },

      feature3: {
        title: "Feature or Implementation 3",
        content:
          "Description of another implementation, workflow, or technical component.",
        commands: [
          "example command",
        ],
      },

      // Add more implementation sections if needed
    },

    challenges: [
      {
        title: "...",
        problem: "...",
      },

      // Add more challenges if needed
    ],

    metrics: [
      {
        value: "X",
        label: "Metric or Highlight",
      },
      {
        value: "X",
        label: "Metric or Highlight",
      },
      {
        value: "Technology",
        label: "Technical Highlight",
      },

      // Add more metrics if needed
    ],

      links: [
        {
          type: "github",
          label: "Backend Repo",
          url: "https://github.com/RaflyAdiyasa/backend-go",
        },
        {
          type: "github",
          label: "GitOps Repo",
          url: "https://github.com/RaflyAdiyasa/gitops",
        },
        {
          type: "github",
          label: "Jenkins Shared Library",
          url: "https://github.com/RaflyAdiyasa/shared-library",
        },
    ],

    deployment: {
      description: "The application is deployed on a Kubernetes cluster using Kind, following GitOps principles with Argo CD. Deployment and infrastructure configurations are managed declaratively through a GitHub repository, covering three deployments (frontend, backend, and MySQL database), services, persistent storage, horizontal pod autoscaling, and network policies for controlling communication between workloads.",
      stack: [
        "Kubernetes",
        "ArgoCD",
        "GitHub",
        "Jenkins",
      ],

    images: [
      {
        src: "/projects/simplego/argocd1.png",
        alt: "argocd dashboard",
        caption: "ArgoCD Aplication List",
      },
      {
        src: "/projects/simplego/argocd2.png",
        alt: "ArgoCD application sync status",
        caption: "ArgoCD showing successful application synchronization",
      },
    ],

    links: [
        {
          type: "github",
          label: "Backend Repo",
          url: "https://github.com/RaflyAdiyasa/backend-go",
        },
        {
          type: "github",
          label: "GitOps Repo",
          url: "https://github.com/RaflyAdiyasa/gitops",
        },
        {
          type: "github",
          label: "Jenkins Shared Library",
          url: "https://github.com/RaflyAdiyasa/shared-library",
        },
      ],
    },


    github: "https://github.com/RaflyAdiyasa/",
    demo: "",
  },


  
  {
    slug: "ztp-multi-vendor-network-provisioning",
    title: "ZTP Multi-Vendor Network Provisioning",
    subtitle:
      "Zero Touch Provisioning workflow for multi-vendor network devices",
    description:
      "A Zero Touch Provisioning environment designed to automate the initial provisioning of network devices from multiple vendors using DHCP-based bootstrapping.",
    category: "Network Automation",

    thumbnail: "/projects/ztp/thumb.png",

    technologies: [
      "ZTP",
      "DHCP",
      "ISC-DHCP",
      "DHCP VCI",
      "Arista EOS",
      "Cumulus Linux",
      "Extreme EXOS",
      "GNS3",
      "Linux",
    ],

    gallery: [
      {
        src: "/projects/ztp/topology.png",
        alt: "ZTP network LAN topology",
        caption: "Multi-vendor network LAN topology simulated with GNS3",
      },
      {
        src: "/projects/ztp/architecture.png",
        alt: "ZTP network WAN topology",
        caption: "Multi-vendor network WAN topology simulated with GNS3",
      },
      {
        src: "/projects/ztp/dhcp-config.png",
        alt: "DHCP configuration",
        caption: "DHCP configuration for device provisioning",
      },
      {
        src: "/projects/ztp/arista.png",
        alt: "Arista device provisioning",
        caption: "ZTP config for Arista EOS",
      },
      {
        src: "/projects/ztp/cumulus.png",
        alt: "Cumulus Linux provisioning",
        caption: "ZTPconfig for Cumulus Linux",
      },
      {
        src: "/projects/ztp/exos.png",
        alt: "Exos provisioning",
        caption: "ZTP config for Cumulus Linux",
      },
    ],

    architecture: {
    image: "/projects/ztp/architecture.png",
    description:
      "The ZTP environment uses DHCP-based device identification and provisioning. Vendor-specific DHCP Vendor Class Identifier information is used to provide the appropriate bootstrapping configuration for different network operating systems. The environment was simulated using GNS3.",
  
      },

    implementation: {
      dhcp: {
        title: "DHCP-Based Provisioning",
        content:
          "Configured ISC DHCP to provide device-specific provisioning information based on DHCP Vendor Class Identifier (VCI).",
        commands: [
          "sudo systemctl status isc-dhcp-server",
          "sudo journalctl -u isc-dhcp-server",
        ],
      },

      multiVendor: {
        title: "Multi-Vendor Support",
        content:
          "Designed provisioning workflows for different network operating systems including Arista EOS, Cumulus Linux, and Extreme EXOS.",
        commands: [
          "show version",
          "show interfaces status",
        ],
      },

      simulation: {
        title: "Network Simulation",
        content:
          "Used GNS3 to build and test the ZTP topology in a controlled environment before applying the provisioning workflow to network devices.",
        commands: [
          "ip addr",
          "ip route",
        ],
      },
    },

    challenges: [
      {
        title: "Supporting different network vendors",
        problem:
          "Different network operating systems require different provisioning information and bootstrapping behavior.",
        investigation:
          "Analyzed vendor-specific DHCP identification information and provisioning requirements.",
        rootCause:
          "ZTP behavior differs between network vendors and operating systems.",
        solution:
          "Used DHCP Vendor Class Identifier information to distinguish devices and provide vendor-specific provisioning parameters.",
        result:
          "A multi-vendor ZTP workflow could be tested in the simulated environment.",
        lessonLearned:
          "Learned how ZTP and DHCP work together to provision network devices, how to interpret vendor-specific configuration syntax, and how data flows during the bootstrapping process. Also gained hands-on experience configuring network devices and routing, while troubleshooting connectivity issues across OSI Layers 1, 2, and 3.",
      },
    ],

    metrics: [
      {
        value: "3",
        label: "Network OS",
      },
      {
        value: "ZTP",
        label: "Automated Provisioning",
      },
      {
        value: "GNS3",
        label: "Network Simulation",
      },
    ],

    github: "https://github.com/RaflyAdiyasa/",
    demo: "",
  },

 



];