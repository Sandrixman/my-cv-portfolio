import { Page, Text, View, Document, StyleSheet, Font, Link } from "@react-pdf/renderer"
import { contactInfo } from "@/config/constants"
import { skillData } from "@/components/sections/Skills/skillData"
import { experiences } from "@/components/sections/Experience/experienceData"

// Register fonts (using standard fonts for now to avoid loading issues, can add custom later)
Font.register({
    family: "Roboto",
    src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
})

Font.register({
    family: "Roboto-Bold",
    src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
})

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        padding: 30,
        fontFamily: "Roboto",
    },
    leftColumn: {
        width: "35%",
        paddingRight: 20,
        borderRight: "1px solid #E5E7EB",
    },
    rightColumn: {
        width: "65%",
        paddingLeft: 20,
    },
    header: {
        marginBottom: 20,
    },
    name: {
        fontSize: 20,
        fontFamily: "Roboto-Bold",
        color: "#111827",
        marginBottom: 5,
    },
    title: {
        fontSize: 14,
        color: "#4B5563",
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 12,
        fontFamily: "Roboto-Bold",
        color: "#111827",
        textTransform: "uppercase",
        marginBottom: 10,
        marginTop: 15,
        borderBottom: "1px solid #E5E7EB",
        paddingBottom: 5,
    },
    contactItem: {
        fontSize: 10,
        color: "#4B5563",
        marginBottom: 5,
        textDecoration: "none",
    },
    skillCategory: {
        fontSize: 10,
        fontFamily: "Roboto-Bold",
        color: "#374151",
        marginTop: 8,
        marginBottom: 4,
    },
    skillItem: {
        fontSize: 9,
        color: "#6B7280",
        marginBottom: 2,
    },
    experienceItem: {
        marginBottom: 15,
    },
    jobTitle: {
        fontSize: 12,
        fontFamily: "Roboto-Bold",
        color: "#111827",
    },
    company: {
        fontSize: 10,
        color: "#4B5563",
        marginBottom: 4,
    },
    date: {
        fontSize: 9,
        color: "#9CA3AF",
        marginBottom: 4,
    },
    description: {
        fontSize: 10,
        color: "#374151",
        lineHeight: 1.4,
    },
    projectCard: {
        backgroundColor: "#F9FAFB",
        border: "1px solid #E5E7EB",
        borderRadius: 4,
        padding: 12,
        marginBottom: 12,
    },
    linkContainer: {
        flexDirection: "row",
        gap: 10,
        marginTop: 6,
        marginBottom: 4,
    },
    link: {
        fontSize: 9,
        color: "#2563EB",
        textDecoration: "none",
    },
})

// Helper interfaces
export interface ResumeData {
    personal: {
        name: string
        title: string
        email: string
        phone: string
        location: string
        linkedin: string
        github: string
        telegram: string
    }
    skills: {
        category: string
        items: string[]
    }[]
    experienceLabel: string
    experience: {
        title: string
        company: string
        period: string
        description: string
    }[]
    projectsLabel: string
    projects: {
        title: string
        tech: string
        description: string
        link?: string
        giturl?: string
    }[]
    summary: string
}

export const ResumeDocument = ({ data }: { data: ResumeData }) => (
    <Document>
        {/* Page 1: Contact, Skills, Experience, Summary */}
        <Page size='A4' style={styles.page}>
            {/* Left Column: Contact & Skills */}
            <View style={styles.leftColumn}>
                <View style={styles.header}>
                    <Text style={styles.name}>{data.personal.name}</Text>
                    <Text style={styles.title}>{data.personal.title}</Text>
                </View>

                <Text style={styles.sectionTitle}>Contact</Text>
                <Link src={`mailto:${data.personal.email}`} style={styles.contactItem}>
                    {data.personal.email}
                </Link>
                <Link src={`tel:${data.personal.phone}`} style={styles.contactItem}>
                    {data.personal.phone}
                </Link>
                <Text style={styles.contactItem}>{data.personal.location}</Text>
                <Link src={data.personal.linkedin} style={styles.contactItem}>
                    LinkedIn
                </Link>
                <Link src={data.personal.github} style={styles.contactItem}>
                    GitHub
                </Link>
                <Link src={data.personal.telegram} style={styles.contactItem}>
                    Telegram
                </Link>

                <Text style={styles.sectionTitle}>Skills</Text>
                {data.skills.map((category) => (
                    <View key={category.category} wrap={false}>
                        <Text style={styles.skillCategory}>{category.category}</Text>
                        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 4 }}>
                            {category.items.map((skill) => (
                                <Text key={skill} style={styles.skillItem}>
                                    • {skill}
                                </Text>
                            ))}
                        </View>
                    </View>
                ))}

                <Text style={styles.sectionTitle}>Languages</Text>
                <Text style={styles.skillItem}>English (Intermediate)</Text>
                <Text style={styles.skillItem}>Ukrainian (Native)</Text>
                <Text style={styles.skillItem}>Russian (Fluent)</Text>
            </View>

            {/* Right Column: Experience & Summary */}
            <View style={styles.rightColumn}>
                <Text style={styles.sectionTitle}>{data.experienceLabel}</Text>
                {data.experience.map((exp, index) => (
                    <View key={index} style={styles.experienceItem} wrap={false}>
                        <Text style={styles.jobTitle}>{exp.title}</Text>
                        <Text style={styles.company}>{exp.company}</Text>
                        <Text style={styles.date}>{exp.period}</Text>
                        <Text style={styles.description}>{exp.description}</Text>
                    </View>
                ))}

                <Text style={styles.sectionTitle}>Summary</Text>
                <Text style={styles.description}>{data.summary}</Text>
            </View>
        </Page>

        {/* Page 2: Projects */}
        <Page size='A4' style={styles.page}>
            <View style={{ width: "100%", paddingHorizontal: 20 }}>
                <Text style={{ ...styles.sectionTitle, fontSize: 16, marginBottom: 20 }}>
                    {data.projectsLabel}
                </Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
                    {data.projects.map((project, index) => (
                        <View key={index} style={{ ...styles.projectCard, width: "48%" }} wrap={false}>
                            <Text style={styles.jobTitle}>{project.title}</Text>
                            <Text style={{ ...styles.company, marginBottom: 2 }}>{project.tech}</Text>
                            <View style={styles.linkContainer}>
                                {project.link && (
                                    <Link src={project.link} style={styles.link}>
                                        🔗 Demo
                                    </Link>
                                )}
                                {project.giturl && project.giturl !== "private" && (
                                    <Link src={project.giturl} style={styles.link}>
                                        💻 GitHub
                                    </Link>
                                )}
                            </View>
                            <Text style={styles.description}>{project.description}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </Page>
    </Document>
)
