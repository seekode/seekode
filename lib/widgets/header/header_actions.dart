import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:url_launcher/url_launcher.dart';

import '../bubble_button.dart';

class HeaderActions extends StatelessWidget {
  const HeaderActions({super.key});

  Widget layout(double width, Widget child) => width > 1024
      ? Positioned(
          right: 0,
          child: SafeArea(child: child),
        )
      : Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            SizedBox(
              height: width * .55 + (width * .3) * 0.76125 + 60,
            ),
            Center(
              child: child,
            ),
          ],
        );

  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.of(context).size.width;
    final double btnWidth = width * .20;

    final bool isDesktop = width > 1024;
    final bool isLarge = width > 1600;

    final double? networkWidth = isLarge
        ? 80
        : isDesktop
            ? null
            : btnWidth;

    final double? networkHeight = isLarge
        ? 80
        : btnWidth < 70
            ? btnWidth
            : null;

    return layout(
      width,
      Padding(
        padding: const EdgeInsets.all(5),
        child: Column(
          children: [
            Row(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                BubbleButton(
                  width: isDesktop ? networkWidth : btnWidth * 2 + 10,
                  height: networkHeight,
                  margin: const EdgeInsets.all(5),
                  onTap: () async {
                    final Uri url = Uri.parse('tel:+33621240684');
                    if (await canLaunchUrl(url)) {
                      await launchUrl(url);
                    }
                  },
                  child: Center(
                    child: SvgPicture.asset(
                      'assets/images/networks/phone.svg',
                      width: 30,
                    ),
                  ),
                ),
                BubbleButton(
                  width: isDesktop ? networkWidth : btnWidth * 2 + 10,
                  height: networkHeight,
                  margin: const EdgeInsets.all(5),
                  onTap: () async {
                    final Uri url = Uri.parse('mailto:nicolas18.ew@gmail.com');
                    if (await canLaunchUrl(url)) {
                      await launchUrl(url);
                    }
                  },
                  child: Center(
                    child: SvgPicture.asset(
                      'assets/images/networks/mail.svg',
                      width: 30,
                    ),
                  ),
                ),
              ],
            ),
            Flex(
              direction: isDesktop ? Axis.vertical : Axis.horizontal,
              mainAxisSize: MainAxisSize.min,
              children: [
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    BubbleButton(
                      width: networkWidth,
                      height: networkHeight,
                      margin: const EdgeInsets.all(5),
                      onTap: () async {
                        final Uri url =
                            Uri.parse('https://www.instagram.com/seekodes');
                        if (await canLaunchUrl(url)) {
                          await launchUrl(url);
                        }
                      },
                      child: Center(
                        child: SvgPicture.asset(
                          'assets/images/networks/instagram.svg',
                          width: 40,
                        ),
                      ),
                    ),
                    BubbleButton(
                      width: networkWidth,
                      height: networkHeight,
                      margin: const EdgeInsets.all(5),
                      onTap: () async {
                        final Uri url =
                            Uri.parse('https://www.tiktok.com/@seekode');
                        if (await canLaunchUrl(url)) {
                          await launchUrl(url);
                        }
                      },
                      child: Center(
                        child: SvgPicture.asset(
                          'assets/images/networks/tiktok.svg',
                          width: 30,
                        ),
                      ),
                    ),
                  ],
                ),
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    BubbleButton(
                      width: networkWidth,
                      height: networkHeight,
                      margin: const EdgeInsets.all(5),
                      onTap: () async {
                        final Uri url = Uri.parse(
                            'https://www.linkedin.com/in/nicolas-texier-dev/');
                        if (await canLaunchUrl(url)) {
                          await launchUrl(url);
                        }
                      },
                      child: Center(
                        child: SvgPicture.asset(
                          'assets/images/networks/linkedin.svg',
                          width: 30,
                        ),
                      ),
                    ),
                    BubbleButton(
                      width: networkWidth,
                      height: networkHeight,
                      margin: const EdgeInsets.all(5),
                      onTap: () async {
                        final Uri url =
                            Uri.parse('https://youtube.com/@_seekode');
                        if (await canLaunchUrl(url)) {
                          await launchUrl(url);
                        }
                      },
                      child: Center(
                        child: SvgPicture.asset(
                          'assets/images/trainings/youtube.svg',
                          width: 30,
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
