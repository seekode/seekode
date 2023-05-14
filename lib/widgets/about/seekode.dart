import 'package:flutter/material.dart';

import '../../app_themes.dart';
import 'review.dart';

class Seekode extends StatelessWidget {
  const Seekode({super.key});

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);
    final Size size = MediaQuery.of(context).size;

    final double nameSize = size.width < 400
        ? 24
        : responsiveValue(
            context,
            phone: 35,
            tablet: 50,
            desktop: 35,
            bigger: {
              1200: 50,
            },
          );

    final double pseudoSize = size.width < 400
        ? 22
        : responsiveValue(
            context,
            phone: 31,
            tablet: 42,
            desktop: 31,
            bigger: {
              1200: 42,
            },
          );

    final double imageSize = responsiveValue(
      context,
      phone: 120,
      tablet: 150,
      desktop: 120,
      bigger: {
        1200: 150,
      },
    );

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(20),
              child: Image.asset(
                'assets/images/about/seekode.jpg',
                width: imageSize,
                height: imageSize,
                fit: BoxFit.cover,
              ),
            ),
            const SizedBox(width: 15),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Nicolas Texier',
                  style: theme.textTheme.titleMedium!.copyWith(
                    fontSize: nameSize,
                    height: 1.1,
                  ),
                ),
                ShaderMask(
                  blendMode: BlendMode.srcIn,
                  shaderCallback: (bounds) => const LinearGradient(
                    begin: Alignment.centerLeft,
                    end: Alignment.centerRight,
                    colors: [
                      Color(0xFF734594),
                      Color(0xFFDF3A8C),
                    ],
                  ).createShader(bounds),
                  child: Text(
                    'Seekode',
                    style: theme.textTheme.titleLarge!.copyWith(
                      fontSize: pseudoSize,
                      height: .6,
                    ),
                  ),
                ),
                SizedBox(
                    height: responsiveValue(
                  context,
                  phone: 25,
                  tablet: 40,
                )),
                Text(
                  '7 ans d\'expériences',
                  style: theme.textTheme.bodyMedium,
                ),
              ],
            ),
          ],
        ),
        const SizedBox(height: 30),
        Container(
          constraints: const BoxConstraints(maxWidth: 600),
          child: Text(
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            style: theme.textTheme.bodySmall,
          ),
        ),
        const SizedBox(height: 30),
        const Review(),
      ],
    );
  }
}