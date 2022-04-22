import React from "react";
import {
  Document,
  Page,
  Text,
  Link,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import convertDate from "../utils/convertDate";

// Create styles
const global = StyleSheet.create({
  body: {
    fontFamily: "Times-Roman",
    fontSize: 12,
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  bullet: {
    left: 13,
    position: "absolute",
    top: 3,
  },
  detail: {
    paddingTop: 3,
    paddingLeft: 25,
  },
  header: {
    borderBottom: 1,
    fontSize: 16,
    fontFamily: "Times-Bold",
    marginBottom: 5,
    marginTop: 13,
    paddingBottom: 2,
    paddingLeft: 10,
  },
  section: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "end",
  },
  viewer: {
    width: window.innerWidth,
    maxWidth: 820,
    height: window.innerHeight,
  },
});

const contactStyles = StyleSheet.create({
  email: {
    alignSelf: "flex-end",
    flex: 0.4,
  },
  github: {
    alignSelf: "flex-end",
    flex: 0.4,
    textAlign: "right",
  },
  linkedin: {
    flex: 0.4,
    textAlign: "right",
  },
  name: {
    flex: 1,
    fontSize: 24,
    fontFamily: "Times-Bold",
    textAlign: "center",
  },
  phone: {
    flex: 0.4,
  },
  website: {
    flex: 1,
    textAlign: "center",
  },
});

const educationStyles = StyleSheet.create({
  location: {
    flex: 0.4,
    fontFamily: "Times-Bold",
  },
  college: {
    flex: 1,
    fontFamily: "Times-Bold",
    textAlign: "center",
  },
  date: {
    flex: 0.4,
    fontFamily: "Times-Bold",
    right: -0,
    // Styling this PDF is genuinely awful
    position: "absolute",
  },
  degree: {
    paddingBottom: 7.5,
    textAlign: "center",
  },
});

const employmentStyles = StyleSheet.create({
  marginBottom: 5,

  job: {
    flex: 0.4,
    fontFamily: "Times-Bold",
    textAlign: "start",
  },
  company: {
    flex: 1,
    fontFamily: "Times-Bold",
    textAlign: "center",
    paddingBottom: 15,
  },
  date: {
    flex: 0.4,
    fontFamily: "Times-Bold",
    right: -0,
    position: "absolute",
  },
  detail: {
    /* top: 14,
    paddingTop: 3,
    left: 25, */
  },
  bullet: {
    /* position: "absolute",
    left: 13,
    top: 17, */
  },
});

const projectStyles = StyleSheet.create({
  marginBottom: 5,

  pName: {
    fontFamily: "Times-Bold",
    paddingBottom: 2,
  },
  link: {
    fontFamily: "Times-Italic",
    paddingBottom: 2,
  },
  details: {
    paddingLeft: 15,
  },
});

const technicalStyles = StyleSheet.create({
  languages: {
    paddingBottom: 2,
  },
  frameLibs: {
    paddingBottom: 2,
  },
  tools: {},
});

// Create Document Component
const BasicDocument = ({
  contact,
  education,
  employment,
  project,
  technical,
}) => {
  return (
    <Document>
      {/* FYI: Make a general styles object */}
      <Page size="A4" style={global.body}>
        {/* Contact Category */}
        <>
          {contact.map((entry) => {
            const { id, email, phone, name, website, github, linkedin } = entry;
            return (
              <View key={id}>
                <View style={global.section}>
                  <Text style={contactStyles.email}>{email.text}</Text>
                  <Text style={contactStyles.name}>{name.text}</Text>
                  <Text style={contactStyles.github}>
                    Github: {github.text}
                  </Text>
                </View>
                <View style={global.section}>
                  <Text style={contactStyles.phone}>{phone.text}</Text>
                  <Text style={contactStyles.website}>{website.text}</Text>
                  <Text style={contactStyles.linkedin}>
                    LinkedIn: {linkedin.text}
                  </Text>
                </View>
              </View>
            );
          })}
        </>
        {/* Education Category */}
        <>
          <Text style={global.header}>Education</Text>
          {education.map((entry) => {
            const { id, location, college, dateFrom, dateTo, degree } = entry;
            return (
              <View key={id}>
                <View style={educationStyles}>
                  <Text style={educationStyles.location}>{location.text}</Text>
                  <Text style={educationStyles.college}>{college.text}</Text>
                  <Text style={educationStyles.date}>
                    {convertDate(dateFrom.text)}
                    {" - "}
                    {convertDate(dateTo.text)}
                  </Text>
                </View>
                <Text style={educationStyles.degree}>
                  {"\n"}
                  {degree.text}
                </Text>
              </View>
            );
          })}
        </>
        {/* Employment Category */}
        <>
          <Text style={global.header}>Employment</Text>
          {employment.map((entry) => {
            const { id, job, company, dateFrom, dateTo, details } = entry;
            return (
              <View style={employmentStyles} key={id}>
                <Text style={employmentStyles.job}>{job.text}</Text>
                <Text style={employmentStyles.company}>{company.text}</Text>
                <Text style={employmentStyles.date}>
                  {convertDate(dateFrom.text)} - {convertDate(dateTo.text)}
                </Text>
                {details.map((detail) => {
                  return (
                    <View style={global.detail} key={detail.id}>
                      <Text style={global.bullet}>•</Text>
                      <Text>{detail.text}</Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </>
        {/* Project Category */}
        <>
          <Text style={global.header}>Projects</Text>
          {project.map((entry) => {
            const { id, pName, link, details } = entry;
            return (
              <View style={projectStyles} key={id}>
                <Text style={projectStyles.pName}>{pName.text}</Text>
                <Link href={link.text} style={projectStyles.link}>
                  {link.text}
                </Link>
                {details.map((detail) => {
                  return (
                    <View style={global.detail} key={detail.id}>
                      <Text style={global.bullet}>•</Text>
                      <Text>{detail.text}</Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </>
        {/* Technical Category */}
        <>
          <Text style={global.header}>Technical Skills</Text>
          {technical.map((entry) => {
            const { id, languages, frameLibs, tools } = entry;
            return (
              <View key={id}>
                <Text style={technicalStyles.languages}>
                  Languages: {languages.text}
                </Text>
                <Text style={technicalStyles.frameLibs}>
                  Framework and Libraries: {frameLibs.text}
                </Text>
                <Text style={technicalStyles.tools}>Tools: {tools.text}</Text>
              </View>
            );
          })}
        </>
      </Page>
    </Document>
  );
};

export default BasicDocument;
