import React from "react";
import {
  Document,
  Page,
  Text,
  Link,
  View,
  StyleSheet,
  PDFViewer,
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
    // The positioning in this PDF is jank, I give up!
    position: "absolute",
  },
  degree: {
    paddingBottom: 10,
    textAlign: "center",
  },
});

const employmentStyles = StyleSheet.create({
  job: {
    flex: 0.4,
    fontFamily: "Times-Bold",
    textAlign: "start",
  },
  company: {
    flex: 1,
    fontFamily: "Times-Bold",
    textAlign: "center",
  },
  date: {
    flex: 0.4,
    fontFamily: "Times-Bold",
    right: -0,
    position: "absolute",
  },
  detail: {
    top: 14,
    paddingTop: 3,
    left: 25,
  },
  bullet: {
    position: "absolute",
    left: 13,
    top: 17,
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
    <PDFViewer style={global.viewer} showToolbar="false">
      {/* Start of the document */}
      <Document>
        {/* FYI: Make a general styles object */}
        <Page size="A4" style={global.body}>
          {/* Contact Category */}
          <>
            <View style={global.section}>
              <Text style={contactStyles.email}>{contact.email.text}</Text>
              <Text style={contactStyles.name}>{contact.name.text}</Text>
              <Text style={contactStyles.github}>
                Github: {contact.github.text}
              </Text>
            </View>
            <View style={global.section}>
              <Text style={contactStyles.phone}>{contact.phone.text}</Text>
              <Text style={contactStyles.website}>{contact.website.text}</Text>
              <Text style={contactStyles.linkedin}>
                LinkedIn: {contact.linkedin.text}
              </Text>
            </View>
          </>
          {/* Education Category */}
          <>
            <Text style={global.header}>Education</Text>
            {education.map((entry) => {
              const { id, location, college, dateFrom, dateTo, degree } = entry;
              return (
                <View key={id}>
                  <View style={educationStyles}>
                    <Text style={educationStyles.location}>
                      {location.text}
                    </Text>
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
                  <Text style={employmentStyles.company}>
                    {company.text}
                    {"\n"}
                  </Text>
                  <Text style={employmentStyles.date}>
                    {convertDate(dateFrom.text)} - {convertDate(dateTo.text)}
                  </Text>
                  {details.map((detail) => {
                    return (
                      <View key={detail.id}>
                        <Text style={employmentStyles.bullet}>{"\n"}•</Text>
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
            <Text style={technicalStyles.languages}>
              Languages: {technical.languages.text}
            </Text>
            <Text style={technicalStyles.frameLibs}>
              Framework and Libraries: {technical.frameLibs.text}
            </Text>
            <Text style={technicalStyles.tools}>
              Tools: {technical.tools.text}
            </Text>
          </>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default BasicDocument;
