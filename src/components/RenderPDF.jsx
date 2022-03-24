import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import convertDate from "../utils/convertDate";
import useHelper from "../utils/useHelper";

// Create styles
const global = StyleSheet.create({
  body: {
    fontFamily: "Times-Roman",
    fontSize: 12,
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  header: {
    borderBottom: 1,
    fontSize: 16,
    fontFamily: "Times-Bold",
    marginBottom: 5,
    marginTop: 30,
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
  },
  degree: {
    paddingTop: 3,
    textAlign: "center",
  },
});

const employmentStyles = StyleSheet.create({
  job: {
    flex: 0.4,
    fontFamily: "Times-Bold",
  },
  company: {
    flex: 1,
    fontFamily: "Times-Bold",
    textAlign: "center",
  },
  date: {
    flex: 0.4,
    fontFamily: "Times-Bold",
  },
  details: {},
});

const projectStyles = StyleSheet.create({
  pName: {
    fontFamily: "Times-Bold",
    paddingBottom: 2,
  },
  link: {
    fontFamily: "Times-Italic",
    paddingBottom: 2,
  },
  details: {},
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
const BasicDocument = (props) => {
  const { contact, education, employment, project, technical } = props;
  // const userData = useHelper({ ...data });
  console.log(props);
  return (
    <PDFViewer style={global.viewer}>
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
            <View style={global.section}>
              <Text style={educationStyles.location}>
                {education.location.text}
              </Text>
              <Text style={educationStyles.college}>
                {education.college.text}
              </Text>
              <Text style={educationStyles.date}>
                {convertDate(education.dateFrom.text)} -{" "}
                {convertDate(education.dateTo.text)}
              </Text>
            </View>
            <Text style={educationStyles.degree}>{education.degree.text}</Text>
          </>
          {/* Employment Category */}
          <>
            <Text style={global.header}>Employment</Text>
            <View style={global.section}>
              <Text style={employmentStyles.job}>{employment.job.text}</Text>
              <Text style={employmentStyles.company}>
                {employment.company.text}
              </Text>
              <Text style={employmentStyles.date}>
                {convertDate(employment.dateFrom.text)} -{" "}
                {convertDate(employment.dateTo.text)}
              </Text>
            </View>
          </>
          {/* Project Category */}
          <>
            <Text style={global.header}>Projects</Text>
            <Text style={projectStyles.pName}>{project.pName.text}</Text>
            <Text style={projectStyles.link}>{project.link.text}</Text>
            <Text style={projectStyles.details}>{project.details.text}</Text>
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
