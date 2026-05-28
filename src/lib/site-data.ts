import {
  BarChart3,
  Blocks,
  Bot,
  CalendarDays,
  Check,
  Cloud,
  Code2,
  Database,
  FileCode2,
  FileSearch,
  Gauge,
  Globe2,
  Headphones,
  Layers3,
  Mail,
  MessageCircle,
  PenTool,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  TestTube2,
  UserRound,
  Workflow,
  Wrench,
} from "lucide-react";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/routing";
export const contact = {
  email: "dev.hongquan@gmail.com",
  zalo: "0356 046 335",
  linkedIn: "linkedin.com/in/quanluon",
  linkedInUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/quanluon",
  zaloUrl: process.env.NEXT_PUBLIC_ZALO_URL || "https://zalo.me/0356046335",
};

const tags = {
  mainBackend: ["NestJS", "Golang", "PostgreSQL"],
  mainAi: ["OCR", "RAG", "LLM"],
  mainCloud: ["AWS", "SQS", "Docker"],
};

export function getSiteData(locale: Locale) {
  const dictionary = getDictionary(locale);

  const navItems = [
    { label: dictionary.header.nav.services, href: "/services" },
    { label: dictionary.header.nav.projects, href: "/projects" },
    { label: dictionary.header.nav.ai, href: "/ai-document-intelligence" },
    { label: dictionary.header.nav.contractor, href: "/contractor" },
    { label: dictionary.header.nav.contact, href: "/contact" },
  ];

  const proofBadges = [
    { label: "Backend / Fullstack", icon: Layers3, color: "text-[#1a365d]" },
    { label: "Node.js / NestJS / Golang", icon: Code2, color: "text-[#006c49]" },
    { label: locale === "vi" ? "Cloud & Automation" : "Cloud & Automation", icon: Cloud, color: "text-[#1a365d]" },
    { label: "AI OCR / RAG", icon: FileSearch, color: "text-[#006c49]" },
    { label: "Remote-ready", icon: Globe2, color: "text-[#1a365d]" },
  ];

  const mainServices = locale === "vi"
    ? [
        {
          title: "Backend & Microservices",
          description: "Thiết kế API, database, queue, cache và các service chạy ổn định phía sau sản phẩm.",
          icon: Layers3,
          tone: "blue",
          href: "/services",
          tags: tags.mainBackend,
        },
        {
          title: "AI OCR / Document Processing",
          description: "Tự động đọc tài liệu, trích xuất dữ liệu và tìm kiếm thông tin khi doanh nghiệp có nhiều hồ sơ.",
          icon: FileSearch,
          tone: "green",
          href: "/ai-document-intelligence",
          tags: tags.mainAi,
        },
        {
          title: "Cloud & Automation",
          description: "Tích hợp webhook, email, SFTP, background jobs và cloud workflow để giảm thao tác thủ công.",
          icon: Cloud,
          tone: "orange",
          href: "/services",
          tags: tags.mainCloud,
        },
      ]
    : [
        {
          title: "Backend & Microservices",
          description: "Design APIs, databases, queues, caching and services that keep the product stable behind the scenes.",
          icon: Layers3,
          tone: "blue",
          href: "/services",
          tags: tags.mainBackend,
        },
        {
          title: "AI OCR / Document Processing",
          description: "Read documents, extract structured data and make information searchable when teams handle many files.",
          icon: FileSearch,
          tone: "green",
          href: "/ai-document-intelligence",
          tags: tags.mainAi,
        },
        {
          title: "Cloud & Automation",
          description: "Integrate webhooks, email, SFTP, background jobs and cloud workflows to reduce manual work.",
          icon: Cloud,
          tone: "orange",
          href: "/services",
          tags: tags.mainCloud,
        },
      ];

  const servicePackages = locale === "vi"
    ? [
        {
          title: "Website / Web app business systems",
          description: "Website rõ ràng, web app quản lý nội bộ và dashboard cho doanh nghiệp nhỏ.",
          bullets: ["Giao diện responsive, dễ dùng", "Form liên hệ, booking, dashboard", "SEO cơ bản và deploy production"],
          icon: Globe2,
          tone: "blue",
          tags: ["Next.js", "React", "Tailwind"],
        },
        {
          title: "Backend & Microservices",
          description: "Backend API cho startup, MVP hoặc hệ thống đang cần mở rộng.",
          bullets: ["REST API / GraphQL, auth, RBAC", "PostgreSQL, MongoDB, Redis, queue", "Payment, webhook, notification"],
          icon: Layers3,
          tone: "purple",
          tags: ["NestJS", "Golang", "Redis"],
        },
        {
          title: "AI OCR / Document Processing",
          description: "Xử lý tài liệu scan/PDF, trích xuất dữ liệu và hỗ trợ tìm kiếm nội dung.",
          bullets: ["OCR pipeline và field extraction", "RAG search cho tài liệu nội bộ", "Xử lý bất đồng bộ, retry rõ ràng"],
          icon: FileSearch,
          tone: "green",
          tags: ["OCR", "Gemini", "RAG"],
        },
        {
          title: "Cloud & Automation",
          description: "Tự động hóa quy trình và tích hợp hệ thống để vận hành nhẹ hơn.",
          bullets: ["Email automation, webhook, SFTP", "Queue-based background jobs", "Report generation, CRM/ERP integration"],
          icon: Workflow,
          tone: "orange",
          tags: ["AWS", "SQS", "CI/CD"],
        },
        {
          title: "Database & Performance",
          description: "Rà soát query, cache, index và luồng dữ liệu để hệ thống phản hồi nhanh hơn.",
          bullets: ["Tối ưu PostgreSQL/MySQL", "Redis caching hợp lý", "Thiết kế schema giảm lỗi cạnh tranh"],
          icon: Database,
          tone: "blue",
          tags: ["PostgreSQL", "Redis", "Indexing"],
        },
        {
          title: "Remote contractor",
          description: "Tham gia team như một backend/fullstack developer thực tế và dễ phối hợp.",
          bullets: ["Làm theo dự án hoặc theo tháng", "Giao tiếp rõ ràng, cập nhật đều", "Ưu tiên code dễ bảo trì"],
          icon: UserRound,
          tone: "green",
          tags: ["Remote", "Backend", "Fullstack"],
        },
      ]
    : [
        {
          title: "Website / Web app business systems",
          description: "Clear websites, internal management apps and dashboards for small businesses.",
          bullets: ["Responsive, easy-to-use interfaces", "Contact forms, booking and dashboards", "Basic SEO and production deployment"],
          icon: Globe2,
          tone: "blue",
          tags: ["Next.js", "React", "Tailwind"],
        },
        {
          title: "Backend & Microservices",
          description: "Backend APIs for startups, MVPs and systems that need room to grow.",
          bullets: ["REST API / GraphQL, auth, RBAC", "PostgreSQL, MongoDB, Redis, queues", "Payment, webhook and notification flows"],
          icon: Layers3,
          tone: "purple",
          tags: ["NestJS", "Golang", "Redis"],
        },
        {
          title: "AI OCR / Document Processing",
          description: "Process scanned files/PDFs, extract data and make document content searchable.",
          bullets: ["OCR pipeline and field extraction", "RAG search for internal documents", "Async processing with clear retry paths"],
          icon: FileSearch,
          tone: "green",
          tags: ["OCR", "Gemini", "RAG"],
        },
        {
          title: "Cloud & Automation",
          description: "Automate operational workflows and integrate systems so teams can work lighter.",
          bullets: ["Email automation, webhooks, SFTP", "Queue-based background jobs", "Report generation, CRM/ERP integration"],
          icon: Workflow,
          tone: "orange",
          tags: ["AWS", "SQS", "CI/CD"],
        },
        {
          title: "Database & Performance",
          description: "Review queries, caching, indexes and data flows to improve response time.",
          bullets: ["PostgreSQL/MySQL optimization", "Practical Redis caching", "Schema design that reduces race-condition risks"],
          icon: Database,
          tone: "blue",
          tags: ["PostgreSQL", "Redis", "Indexing"],
        },
        {
          title: "Remote contractor",
          description: "Join your team as a practical backend/fullstack developer.",
          bullets: ["Project-based or monthly work", "Clear communication and regular updates", "Maintainable code first"],
          icon: UserRound,
          tone: "green",
          tags: ["Remote", "Backend", "Fullstack"],
        },
      ];

  const workflow = locale === "vi"
    ? [
        { title: "Nghe kỹ bài toán", description: "Làm rõ mục tiêu, người dùng, dữ liệu và ngân sách trước khi code.", icon: MessageCircle, tone: "blue" },
        { title: "Chọn hướng vừa đủ", description: "Đề xuất kiến trúc dễ hiểu, tránh làm phức tạp khi chưa cần.", icon: PenTool, tone: "green" },
        { title: "Làm theo mốc nhỏ", description: "Chia milestone, demo đều và xử lý sớm các điểm chưa rõ.", icon: Check, tone: "orange" },
        { title: "Bàn giao dễ tiếp quản", description: "Deploy, hướng dẫn sử dụng và để lại ghi chú kỹ thuật cần thiết.", icon: Headphones, tone: "purple" },
      ]
    : [
        { title: "Understand the problem", description: "Clarify goals, users, data and budget before writing code.", icon: MessageCircle, tone: "blue" },
        { title: "Choose the right-sized path", description: "Suggest an understandable architecture without making things heavier than needed.", icon: PenTool, tone: "green" },
        { title: "Work in small milestones", description: "Break work down, demo regularly and resolve unclear parts early.", icon: Check, tone: "orange" },
        { title: "Handover clearly", description: "Deploy, document key notes and leave the system easier to continue.", icon: Headphones, tone: "purple" },
      ];

  const serviceProcess = locale === "vi"
    ? [
        { title: "Tư vấn nhu cầu", description: "Trao đổi để hiểu bài toán vận hành, dữ liệu và mục tiêu kinh doanh.", icon: MessageCircle, tone: "blue" },
        { title: "Đề xuất kỹ thuật", description: "Chốt phạm vi, kiến trúc, thời gian và ngân sách bằng ngôn ngữ dễ hiểu.", icon: FileCode2, tone: "green" },
        { title: "Triển khai & bàn giao", description: "Xây dựng theo milestone, kiểm thử và bàn giao để bạn dùng được.", icon: Rocket, tone: "orange" },
      ]
    : [
        { title: "Understand the need", description: "Discuss operations, data and business goals before shaping the work.", icon: MessageCircle, tone: "blue" },
        { title: "Technical proposal", description: "Define scope, architecture, timeline and budget in plain language.", icon: FileCode2, tone: "green" },
        { title: "Build & handover", description: "Deliver by milestone, test the result and hand it over for real use.", icon: Rocket, tone: "orange" },
      ];

  const projects = locale === "vi"
    ? [
        { title: "Healthcare Booking & Teleconsultation", eyebrow: "Healthcare / Microservices", description: "Hệ thống đặt lịch, thanh toán, membership, video consultation và notification workflow cho nền tảng y tế.", tags: ["Node.js", "NestJS", "Redis", "PostgreSQL", "AWS"], type: "backend", icon: Layers3, visual: "booking" },
        { title: "AI Document Intelligence", eyebrow: "OCR / Document Search", description: "Pipeline đọc hồ sơ, trích xuất trường dữ liệu và hỗ trợ tìm kiếm tài liệu bằng ngôn ngữ tự nhiên.", tags: ["OCR", "Gemini", "RAG", "S3", "SQS"], type: "ai", icon: FileSearch, visual: "document" },
        { title: "Marketplace Search Platform", eyebrow: "Marketplace / Search", description: "Kiến trúc search và caching cho marketplace cần phản hồi nhanh, dữ liệu nhiều và dễ mở rộng.", tags: ["Golang", "NestJS", "Redis", "Elasticsearch"], type: "backend", icon: Gauge, visual: "website" },
        { title: "Inventory & Order Processing", eyebrow: "E-commerce / Operations", description: "Hệ thống quản lý kho và đơn hàng theo hướng event-driven, giảm lỗi khi nhiều thao tác xảy ra cùng lúc.", tags: ["NestJS", "RabbitMQ", "PostgreSQL", "React"], type: "webapp", icon: Blocks, visual: "api" },
        { title: "ESG Reporting Workflow", eyebrow: "Enterprise / Reporting", description: "Luồng báo cáo có phân quyền, cô lập dữ liệu theo tenant và tự động tạo file PDF/Excel.", tags: ["NestJS", "PostgreSQL", "AWS Lambda", "Vue"], type: "webapp", icon: BarChart3, visual: "dashboard" },
      ]
    : [
        { title: "Healthcare Booking & Teleconsultation", eyebrow: "Healthcare / Microservices", description: "Booking, payment, membership, video consultation and notification workflows for a healthcare platform.", tags: ["Node.js", "NestJS", "Redis", "PostgreSQL", "AWS"], type: "backend", icon: Layers3, visual: "booking" },
        { title: "AI Document Intelligence", eyebrow: "OCR / Document Search", description: "A document pipeline for reading records, extracting fields and supporting natural-language search.", tags: ["OCR", "Gemini", "RAG", "S3", "SQS"], type: "ai", icon: FileSearch, visual: "document" },
        { title: "Marketplace Search Platform", eyebrow: "Marketplace / Search", description: "Search and caching architecture for a marketplace that needs fast responses and room to scale.", tags: ["Golang", "NestJS", "Redis", "Elasticsearch"], type: "backend", icon: Gauge, visual: "website" },
        { title: "Inventory & Order Processing", eyebrow: "E-commerce / Operations", description: "Inventory and order processing built around event-driven flows to reduce concurrency issues.", tags: ["NestJS", "RabbitMQ", "PostgreSQL", "React"], type: "webapp", icon: Blocks, visual: "api" },
        { title: "ESG Reporting Workflow", eyebrow: "Enterprise / Reporting", description: "Reporting workflows with RBAC, tenant data isolation and automated PDF/Excel generation.", tags: ["NestJS", "PostgreSQL", "AWS Lambda", "Vue"], type: "webapp", icon: BarChart3, visual: "dashboard" },
      ];

  const contractorFit = locale === "vi"
    ? [
        { title: "Build a practical MVP", description: "Ra phiên bản đầu gọn, đúng trọng tâm và không over-engineering.", icon: Rocket, tone: "blue" },
        { title: "Cải thiện hệ thống hiện có", description: "Sửa lỗi, làm sạch flow và giúp backend dễ bảo trì hơn.", icon: Wrench, tone: "green" },
        { title: "Backend/API support", description: "Thiết kế API, tích hợp dịch vụ và xử lý luồng dữ liệu production.", icon: Code2, tone: "purple" },
        { title: "Remote team member", description: "Làm cùng team từ xa với cập nhật rõ ràng và tiến độ đều.", icon: UserRound, tone: "orange" },
      ]
    : [
        { title: "Build a practical MVP", description: "Ship a focused first version without over-engineering the product.", icon: Rocket, tone: "blue" },
        { title: "Improve an existing system", description: "Fix bugs, clean up flows and make backend code easier to maintain.", icon: Wrench, tone: "green" },
        { title: "Backend/API support", description: "Design APIs, integrate services and handle production data flows.", icon: Code2, tone: "purple" },
        { title: "Remote team member", description: "Work with your team with clear updates and steady delivery.", icon: UserRound, tone: "orange" },
      ];

  const contactCards = [
    { title: "Email", value: contact.email, note: locale === "vi" ? "Phản hồi trong ngày" : "Same-day reply", href: `mailto:${contact.email}`, icon: Mail, tone: "blue" },
    { title: "Zalo", value: contact.zalo, note: locale === "vi" ? "Nhắn tin nhanh" : "Fast messaging", href: contact.zaloUrl, icon: Send, tone: "green" },
    { title: "LinkedIn", value: contact.linkedIn, note: locale === "vi" ? "Kết nối & hợp tác" : "Connect & collaborate", href: contact.linkedInUrl, icon: Blocks, tone: "blue" },
  ];

  const values = locale === "vi"
    ? [
        { title: "Rõ ràng", description: "Phạm vi, chi phí và tiến độ được nói thẳng ngay từ đầu.", icon: Sparkles, tone: "orange" },
        { title: "Ổn định", description: "Ưu tiên hệ thống chạy đều, dễ theo dõi và dễ xử lý khi có sự cố.", icon: ShieldCheck, tone: "blue" },
        { title: "Dễ tiếp quản", description: "Code, API và ghi chú kỹ thuật được giữ gọn để team sau này tiếp tục được.", icon: FileCode2, tone: "green" },
      ]
    : [
        { title: "Clear", description: "Scope, cost and timeline are discussed plainly from the start.", icon: Sparkles, tone: "orange" },
        { title: "Stable", description: "Prioritize systems that run steadily and are easier to observe.", icon: ShieldCheck, tone: "blue" },
        { title: "Handover-friendly", description: "Code, APIs and technical notes stay clear enough for another team to continue.", icon: FileCode2, tone: "green" },
      ];

  const techStacks = [
    { title: "Frontend", items: ["React", "Next.js", "Vue", "TypeScript", "TailwindCSS", "Zustand"], icon: Code2, tone: "blue" },
    { title: "Backend", items: ["Node.js", "NestJS", "Express", "Golang", "REST API", "GraphQL", "Microservices"], icon: Layers3, tone: "purple" },
    { title: "Database & Search", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"], icon: Database, tone: "green" },
    { title: "Cloud & DevOps", items: ["AWS Lambda", "SQS", "S3", "ECS", "IAM", "Docker", "GitHub Actions"], icon: Cloud, tone: "orange" },
    { title: "AI / Document Processing", items: ["LLM", "RAG", "OCR Pipelines", "Gemini", "Document AI", "Prompting"], icon: Bot, tone: "green" },
    { title: "Testing", items: ["Jest", "Unit Testing", "Integration Testing", "TDD"], icon: TestTube2, tone: "blue" },
  ];

  const contractorProfile = locale === "vi"
    ? [
        { title: "Backend / Fullstack", description: "API, database design, cloud integration và production fixes.", icon: Layers3 },
        { title: "Node.js / NestJS / Golang / React", description: "TypeScript, PostgreSQL, Redis, Docker, AWS và frontend thực tế.", icon: Code2 },
        { title: "Theo dự án hoặc theo tháng", description: "Giao tiếp rõ ràng, code dễ bảo trì và delivery đều.", icon: CalendarDays },
      ]
    : [
        { title: "Backend / Fullstack", description: "APIs, database design, cloud integration and production fixes.", icon: Layers3 },
        { title: "Node.js / NestJS / Golang / React", description: "TypeScript, PostgreSQL, Redis, Docker, AWS and practical frontend work.", icon: Code2 },
        { title: "Project-based or monthly work", description: "Clear communication, maintainable code and steady delivery.", icon: CalendarDays },
      ];

  const documentUseCases = locale === "vi"
    ? [
        "Hồ sơ bệnh án hoặc tài liệu chuyên môn",
        "Hóa đơn, chứng từ, biểu mẫu doanh nghiệp",
        "Tài liệu scan/PDF cần trích xuất dữ liệu",
        "Kho tài liệu nội bộ cần tìm kiếm nhanh hơn",
      ]
    : [
        "Medical records or specialized documents",
        "Invoices, business forms and supporting documents",
        "Scanned files/PDFs that need structured extraction",
        "Internal document collections that need faster search",
      ];

  const documentFlow = locale === "vi"
    ? [
        { title: "Nhận tài liệu", description: "Upload file scan/PDF hoặc lấy từ hệ thống sẵn có.", icon: FileCode2, tone: "blue" },
        { title: "OCR & trích xuất", description: "Đọc nội dung, nhận diện trường dữ liệu và chuẩn hóa kết quả.", icon: FileSearch, tone: "green" },
        { title: "Kiểm tra & lưu trữ", description: "Cho phép kiểm tra lại dữ liệu trước khi lưu vào database/search index.", icon: Check, tone: "orange" },
        { title: "Tìm kiếm & tích hợp", description: "Tìm bằng từ khóa/ngôn ngữ tự nhiên hoặc gửi dữ liệu sang hệ thống khác.", icon: Workflow, tone: "purple" },
      ]
    : [
        { title: "Receive documents", description: "Upload scanned files/PDFs or pull them from an existing system.", icon: FileCode2, tone: "blue" },
        { title: "OCR & extraction", description: "Read content, identify fields and normalize the result.", icon: FileSearch, tone: "green" },
        { title: "Review & store", description: "Allow data review before saving to a database or search index.", icon: Check, tone: "orange" },
        { title: "Search & integrate", description: "Search by keyword/natural language or send data to another system.", icon: Workflow, tone: "purple" },
      ];

  return {
    navItems,
    proofBadges,
    mainServices,
    servicePackages,
    workflow,
    serviceProcess,
    projects,
    contractorFit,
    contactCards,
    values,
    techStacks,
    contractorProfile,
    documentUseCases,
    documentFlow,
  };
}
