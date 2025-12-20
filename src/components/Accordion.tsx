import { Pressable, StyleSheet, View } from "react-native"
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
  interpolateColor,
} from "react-native-reanimated"

import theme from "../theme/theme"

import { Box } from "./Box"
import { Text } from "./Text"
import { useAppTheme } from "../theme/useAppTheme"

type AccordionProps = {
  title: string
  description: string
}

function AccordionHeader({ title, progress }: { title: string; progress: SharedValue<number> }) {
  const { colors, borderRadii } = useAppTheme()

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(progress.value, [0, 1], [colors.transparent, colors.gray1]),
    borderBottomLeftRadius: interpolate(progress.value, [0, 1], [borderRadii.default, 0]),
    borderBottomRightRadius: interpolate(progress.value, [0, 1], [borderRadii.default, 0]),
  }))

  const iconAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: interpolate(progress.value, [0, 1], [0, -180]) + "deg",
      },
    ],
    tintColor: interpolateColor(progress.value, [0, 1], [colors.gray2, colors.primary]),
  }))

  return (
    <Animated.View style={[animatedStyle, styles.header]}>
      <Box flexShrink={1}>
        <Text variant="title16">{title}</Text>
      </Box>
      <Animated.Image
        source={require("@/assets/images/chevron-down.png")}
        style={[
          iconAnimatedStyle,
          {
            width: 24,
            height: 24,
          },
        ]}
      />
    </Animated.View>
  )
}

function AccordionBody({
  description,
  isOpen,
  progress,
}: {
  description: string
  isOpen: SharedValue<boolean>
  progress: SharedValue<number>
}) {
  const height = useSharedValue(0)
  const { borderRadii } = useAppTheme()

  // const derivedHeight = useDerivedValue(() =>
  //   withTiming(height.value * Number(isOpen.value), { duration: 500 }),
  // )

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(progress.value, [0, 1], [0, 1]),
      height: interpolate(progress.value, [0, 1], [0, height.value]),
      borderTopLeftRadius: interpolate(progress.value, [0, 1], [borderRadii.default, 0]),
      borderTopRightRadius: interpolate(progress.value, [0, 1], [borderRadii.default, 0]),
    }
  })

  return (
    <Animated.View style={[animatedStyle, { overflow: "hidden" }]}>
      <View
        style={styles.body}
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height
        }}
      >
        <Text>{description}</Text>
      </View>
    </Animated.View>
  )
}

export function Accordion({ title, description }: AccordionProps) {
  const isOpen = useSharedValue(false)
  const progress = useSharedValue(0) // 0 closed, 1 open

  function handleOpenPress() {
    isOpen.value = !isOpen.value
    progress.value = withTiming(isOpen.value ? 0 : 1, { duration: 500 })
  }

  return (
    <Pressable onPress={handleOpenPress}>
      <View>
        <AccordionHeader title={title} progress={progress} />
        <AccordionBody description={description} isOpen={isOpen} progress={progress} />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderWidth: 2,
    borderColor: theme.colors.gray1,
    borderRadius: theme.borderRadii.default,
  },
  body: {
    position: "absolute",
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: theme.colors.gray1,
    borderBottomLeftRadius: theme.borderRadii.default,
    borderBottomRightRadius: theme.borderRadii.default,
  },
})
