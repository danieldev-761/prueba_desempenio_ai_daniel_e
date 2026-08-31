import logging
import sys


def setup_logging(debug: bool = False) -> logging.Logger:
    log_level = logging.DEBUG if debug else logging.INFO

    formatter = logging.Formatter(
        fmt="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )

    handler = logging.StreamHandler(sys.stdout)
    handler.setFormatter(formatter)

    logger = logging.getLogger("academy_ai")
    logger.setLevel(log_level)

    # Avoid duplicate handlers on re-init
    if not logger.handlers:
        logger.addHandler(handler)

    return logger


def get_logger(name: str = "academy_ai") -> logging.Logger:
    return logging.getLogger(name)


logger = setup_logging()
