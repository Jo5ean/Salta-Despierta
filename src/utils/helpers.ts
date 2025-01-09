export const formatName = (name: string) => {
    return encodeURIComponent(
        name
            .replaceAll(" ", "-")
            .replaceAll("/", "-")
            .replaceAll("?", "-")
            .replaceAll("&", "-")
            .replaceAll("=", "-")
            .replaceAll("%", "-")
            .replaceAll("#", "-")
            .replaceAll("$", "-")
            .replaceAll("@", "-")
            .replaceAll("`", "-")
            .replaceAll("\\", "-")
            .replaceAll(":", "-")
            .replaceAll(";", "-")
            .replaceAll("'", "-")
            .replaceAll('"', "-")
            .replaceAll(",", "-")
            .replaceAll(".", "-"),
    );
};