import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
const styles = StyleSheet.create({
  displayImageWeight: {
    width: 16,
    height: 16,
  },
  displayRightSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 32,
  },
  displayFirstRow: {
    display: "flex",
    gap: 8,
  },
  displaySecondRow: {
    display: "flex",
    gap: 8,
  },
  displayTextBox: {
    borderRadius: 8,
    padding: 4,
  },
  displayHeartRate: {
    backgroundColor: "gray",
  },
  displayImageHeartRate: {
    width: 16,
    height: 16,
  },
  displayCholesterol: {
    backgroundColor: "#8684D3",
  },
  displayImageCholesterol: {
    width: 24,
    height: 20,
  },
  displayBloodPressure: {
    backgroundColor: "gray",
  },
  displayImageBloodPressure: {
    width: 24,
    height: 32,
  },
  displayGlucose: {
    backgroundColor: "gray",
  },
  displayImageGlucoseLevel: {
    width: 24,
    height: 20,
  },
  displayWeight: {
    backgroundColor: "#BFA9EC",
    marginTop: 12,
  },
  displayOverallHealth: {
    backgroundColor: "#BFE2FC",
    marginTop: 32,
  },
  overallHealthImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  displayImageOverallChart: {
    width: 64,
    height: 64,
    marginRight: 16,
  },
  displayImageOverallCircle: {
    width: 64,
    height: 64,
  },
});

const PdfTemplate = ({healthData}) => {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.displayRightSection}>
          <View style={styles.displayFirstRow}>
            <View style={[styles.displayTextBox, styles.displayHeartRate]}>
              <View style={styles.displayHeartRate}>
                <Image
                  src="/images/heart_rate.png"
                  style={styles.displayImageHeartRate}
                />
                <Text>{healthData?.ecg ? healthData?.ecg: "-"} bpm</Text>
              </View>
              <Text style={styles.displayTextBoxTitle}>Heart Rate</Text>
            </View>
            <View style={[styles.displayTextBox, styles.displayCholesterol]}>
              <View style={styles.displayCholesterol}>
                <Image
                  src="/images/cholesterol.png"
                  style={styles.displayImageCholesterol}
                />
                <Text>{healthData?.cholesterol ? healthData?.cholesterol: "-"} mg/dL</Text>
              </View>
              <Text style={styles.displayTextBoxTitle}>Cholesterol Level</Text>
            </View>
            <View style={[styles.displayTextBox, styles.displayBloodPressure]}>
              <View style={styles.displayBloodPressure}>
                <Image
                  src="/images/blood-pressure.png"
                  style={styles.displayImageBloodPressure}
                />
                <Text>{healthData?.bloodPressure ? healthData?.bloodPressure: "-"} mm Hg</Text>
              </View>
              <Text style={styles.displayTextBoxTitle}>Blood Pressure</Text>
            </View>
          </View>

          <View style={[styles.displayTextBox, styles.displayOverallHealth]}>
            <Text style={styles.displayTextBoxTitle}>Overall Health</Text>
            <View style={styles.overallHealthImageContainer}>
              <Image
                src="/images/overall-chart.png"
                style={styles.displayImageOverallChart}
              />
              <Image
                src="/images/overall-circle.png"
                style={styles.displayImageOverallCircle}
              />
            </View>
          </View>

          <View style={styles.displaySecondRow}>
            <View style={styles.displaySecondRowFirstColumn}>
              <View style={[styles.displayTextBox, styles.displayGlucose]}>
                <View style={styles.displayGlucose}>
                  <Image
                    src="/images/glucose-level.png"
                    style={styles.displayImageGlucoseLevel}
                  />
                  <Text>{healthData?.glucoseLevel ? healthData?.glucoseLevel: "-"} mg/dL</Text>
                </View>
                <Text style={styles.displayTextBoxTitle}>Glucose Level</Text>
              </View>
              <View style={[styles.displayTextBox, styles.displayWeight]}>
                <View style={styles.displayWeight}>
                  <Image
                    src="/images/Weight1.png"
                    style={styles.displayImageWeight}
                  />
                  <Text>{healthData?.weight ? healthData?.weight: "-"} kg</Text>
                </View>
                <Text style={styles.displayTextBoxTitle}>Weight</Text>
              </View>
            </View>

            <View style={[styles.displayTextBox, styles.displayCholesterol]}>
              <View style={styles.displayCholesterol}>
                <Image
                  src="/images/height.png"
                  style={styles.displayImageCholesterol}
                />
                <Text>{healthData?.height ? healthData?.height: "-"} mg/dL</Text>
              </View>
              <Text style={styles.displayTextBoxTitle}>Height</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfTemplate;
