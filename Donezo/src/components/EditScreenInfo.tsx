import { StyleSheet, Text, View } from 'react-native';

export default function EditScreenInfo({ path }: { path: string }) {
  const title = 'Tentative login screen';
  const description =
    `Still need to work on navigation since I am not sure how to do gestures yet. We just have buttons for now. 
    Also add settings`;

  return (
    <View style={styles.getStartedContainer}>
      <Text style={styles.getStartedText}>{title}</Text>
      <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
        <Text>{path}</Text>
      </View>
      <Text style={styles.getStartedText}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 15,
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
});
