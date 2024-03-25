import { Box } from "@mui/material";
import PropTypes from 'prop-types';

// Definición de propiedades esperadas
Schema.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
};

function Schema({ src, alt }) {
    return (
        <Box
            component="img"
            src={src}
            alt={alt || 'Imagen'}
            sx={{
                maxWidth: '60%',
                maxHeight: '60%',
                borderRadius: '8px'
            }}
        />
    );
}

export default Schema;
