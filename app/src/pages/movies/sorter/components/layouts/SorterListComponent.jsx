import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    color: white;
`

function SorterListComponent(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export { SorterListComponent }