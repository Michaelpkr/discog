import { Link as RouterLink } from 'react-router-dom'
import {
    Button,
    Box,
    Card,
    CardContent,
    CardActionArea,
    Container,
    Typography,
    TextField,
    Divider,
} from '@mui/material'
import {useState} from "react";

export default function Discover() {

    const [artists, setArtists] = useState([])
    const [loading, setLoading] = useState(false)
    const [artistQuery, setArtistQuery] = useState("")

    async function getArtists() {
        setLoading(true)
        const response = await fetch(`https://discog-production.up.railway.app/api/artists/obscure?query=${artistQuery}`)
        const data = await response.json()
        setArtists(data)
        setLoading(false)
    }

    async function getIndividualArtist() {
        setLoading(true)
        const response = await fetch(`https://discog-production.up.railway.app/api/artists/obscure?query=${artistQuery}`)
        const data = await response.json()
        setArtists(data)
        setLoading(false)
    }

    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Typography variant="h3" fontWeight={600} gutterBottom>
                Discover New Artists
            </Typography>
            <Divider sx={{ mb: 4 }} />

            {/*<Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: 2 }}>*/}
            {/*    <Button variant="outlined" onClick={() => getArtists('jazz')}>Jazz</Button>*/}
            {/*    <Button variant="outlined" onClick={() => getArtists('rock')}>Rock</Button>*/}
            {/*    <Button variant="outlined" onClick={() => getArtists('hip-hop')}>Hip-Hop</Button>*/}
            {/*    <Button variant="outlined" onClick={() => getArtists('classical')}>Classical</Button>*/}
            {/*    <Button variant="outlined" onClick={() => getArtists('electronic')}>Electronic</Button>*/}
            {/*    <Button variant="outlined" onClick={() => getArtists('r&b')}>R&B</Button>*/}
            {/*    <Button variant="outlined" onClick={() => getArtists('country')}>Country</Button>*/}
            {/*    <Button variant="outlined" onClick={() => getArtists('metal')}>Metal</Button>*/}
            {/*    <Button variant="outlined" onClick={() => getArtists('pop')}>Pop</Button>*/}
            {/*    <Button variant="outlined" onClick={() => getArtists('reggae')}>Reggae</Button>*/}
            {/*    <Button variant="outlined" onClick={() => getArtists('folk')}>Folk</Button>*/}
            {/*    <Button variant="outlined" onClick={() => getArtists('blues')}>Blues</Button>*/}
            {/*</Box>*/}

            <Box>
                <TextField
                onChange={(e) => setArtistQuery(e.target.value)}
                placeholder="Search for a particular artist"
                />
                <Button onClick={getIndividualArtist}>Search</Button>
            </Box>

            {loading && <Typography sx={{ mt: 3 }}>Loading...</Typography>}

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 3 }}>
                {artists.map((artist) => (
                    <Card key={artist.id} sx={{ width: 160 }}>
                        <a href={artist.externalUrls?.spotify} target="_blank" rel="noreferrer" style={{ display: 'block', cursor: 'pointer' }}>
                            <img alt={artist.name} src={artist.images[0].url} width="160" style={{ display: 'block' }} />
                        </a>
                        <CardContent>
                            <Typography variant="h6" fontSize={14}>{artist.name}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Container>
    )
}