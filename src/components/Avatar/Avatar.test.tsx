import { Avatar, AVATAR_CLASSNAME } from "./Avatar";
import { render, screen } from "@testing-library/react";

test('ClassName is good', () => {
    const { container } = render(<Avatar src="https://resize.programme-television.ladmedia.fr/rcrop/1200,/img/var/premiere/storage/images/tele-7-jours/news-tv/un-apres-midi-100-shrek-sur-france-2-4393382/89186312-1-fre-FR/Un-apres-midi-100-Shrek-sur-France-2.png" alt="default" />);
    expect(container.querySelector('.' + AVATAR_CLASSNAME)).toBeInTheDocument();
});

test('Width is the same as height', () => {
    const { container } = render(<Avatar src="https://resize.programme-television.ladmedia.fr/rcrop/1200,/img/var/premiere/storage/images/tele-7-jours/news-tv/un-apres-midi-100-shrek-sur-france-2-4393382/89186312-1-fre-FR/Un-apres-midi-100-Shrek-sur-France-2.png" alt="default" />);
    const avatar: Element = container.querySelector('.' + AVATAR_CLASSNAME)!;
    const style = getComputedStyle(avatar);
    expect(style.width).toMatch(style.height);
});