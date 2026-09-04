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
        title: "Authentication and Role Management",
        problem:
          "Different users require different access levels within the application.",
        investigation:
          "Identified the required roles and protected API functionality using authentication and authorization middleware.",
        rootCause:
          "User, organizer, and admin functionality must be separated to prevent unauthorized operations.",
        solution:
          "Implemented JWT-based authentication and middleware-based authorization.",
        result:
          "Protected API endpoints can distinguish authenticated users and their roles.",
        lessonLearned:
          "Authentication and authorization should be designed as part of the application architecture rather than added later.",
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

      {
        title: "Integration Between Frontend and Backend",
        problem:
          "The frontend requires consistent communication with multiple backend API endpoints.",
        investigation:
          "Tested API request and response flows between the React frontend and Golang backend.",
        rootCause:
          "Different application features depend on correctly structured API contracts.",
        solution:
          "Implemented REST API endpoints and documented them using Swagger to support frontend integration.",
        result:
          "Frontend features can communicate with the backend through documented API endpoints.",
        lessonLearned:
          "Clear API contracts make frontend and backend integration easier to develop and maintain.",
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
        title: "Managing cloud infrastructure consistently",
        problem:
          "Manually configuring cloud resources makes environments harder to reproduce and maintain.",
        investigation:
          "Reviewed the infrastructure requirements and identified networking and managed database resources that needed to be provisioned consistently.",
        rootCause:
          "Infrastructure configuration was dependent on manual configuration and was not fully represented as code.",
        solution:
          "Used Terraform to define and provision the required cloud infrastructure.",
        result:
          "Infrastructure configuration became reproducible and easier to maintain.",
        lessonLearned:
          "Infrastructure as Code helps reduce configuration drift and makes infrastructure changes easier to review.",
      },
      {
        title: "Automating application delivery",
        problem:
          "Manual application build and deployment increases repetitive operational work.",
        investigation:
          "Identified the build and deployment steps that could be automated whenever application changes were pushed.",
        rootCause:
          "The deployment workflow required manual execution of multiple steps.",
        solution:
          "Implemented a CI/CD workflow using Google Cloud Build.",
        result:
          "Application delivery became more consistent and automated.",
        lessonLearned:
          "Automating repetitive deployment tasks improves consistency and reduces manual errors.",
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
        title: "Running multiple services locally",
        problem:
          "The application depends on multiple infrastructure services including MySQL, Redis, and MinIO.",
        investigation:
          "Identified the application and infrastructure dependencies that needed to run together during development.",
        rootCause:
          "Running each dependency manually made the development environment harder to reproduce.",
        solution:
          "Defined the application and supporting services using Docker Compose.",
        result:
          "The complete development environment can be started consistently using Docker Compose.",
        lessonLearned:
          "Container orchestration with Docker Compose simplifies reproducible multi-service development environments.",
      },
      {
        title: "Application visibility",
        problem:
          "Application and infrastructure issues are difficult to troubleshoot without metrics.",
        investigation:
          "Identified the need to monitor application infrastructure and Redis activity.",
        rootCause:
          "Important runtime metrics were not centralized in a monitoring dashboard.",
        solution:
          "Integrated Prometheus, Grafana, Node Exporter, and Redis Exporter.",
        result:
          "Runtime metrics became available for monitoring and troubleshooting.",
        lessonLearned:
          "Observability should be considered early when designing operationally maintainable applications.",
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
        type: "docker",
        label: "Docker Hub",
        url: "https://hub.docker.com/repositories/huan271",
      },
    ],

    // NEW: Deployment section
    deployment: {
      description: "Aplikasi di-deploy menggunakan Docker Compose dengan monitoring stack lengkap. Setup dapat dijalankan di server lokal maupun cloud VM.",
      stack: [
        "Docker",
        "Docker Compose",
        "Prometheus",
        "Grafana",
      ],
      links: [
        {
          type: "github",
          label: "Docker Compose",
          url: "https://github.com/RaflyAdiyasa/Helpdesk-Ticketing-API",
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
        title: "Challenge Title",
        problem:
          "Description of the technical problem or challenge encountered.",
        investigation:
          "Steps taken to investigate and understand the problem.",
        rootCause:
          "Identified root cause of the problem.",
        solution:
          "Solution or approach used to resolve the problem.",
        result:
          "Outcome after implementing the solution.",
        lessonLearned:
          "Key technical lesson or insight gained from the challenge.",
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
          "Automation workflows need to account for vendor-specific behavior when dealing with heterogeneous infrastructure.",
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