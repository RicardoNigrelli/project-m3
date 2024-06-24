import { cancelAppointmentById } from "../../../helpers";
import { cancelarAppointment } from "../../../redux/appointmentSlices";
import {
  ButtonPropertyDiv,
  InputDiv,
  NavigateDiv,
  ProfileCard,
  ProfileCardLeft,
  ProfileCardRight,
  ProfileChangePictureButton,
  ProfileContainer,
  ProfileContainerLeft,
  ProfileContainerRight,
  ProfileImg,
  ProfileInfo,
  ProfileName,
  PropertyDiv,
  Underline,
  UserAppointments,
  UserAppointmentsList,
  UserAppointmentsListButton,
  UserAppointmentsListContainer,
  UserAppointmentsTitle,
  YouMustLogin,
} from "./Profile.styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ButtonAuth } from "../Header/Header.styled";
import { useState } from "react";
import { setProfilePicture } from "../../../redux/userSlices";

export default function ProfileComponent() {
  const dispatch = useDispatch();
  const appointments = useSelector(
    (state) => state.appointmentReducer.appointmentsContainer
  );
  const id = useSelector((state) => state.idReducer.userId);
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer.userContainer[0]);
  console.log(user);
  console.log(id);
  console.log(appointments);

  const [imgUrl, setImgUrl] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const profilePictures = useSelector(
    (state) => state.userReducer.profilePictures
  );
const defaultProfilePicture = "url_a_tu_imagen_predeterminada";
const profilePicture = profilePictures[user.id] || defaultProfilePicture;
  console.log(profilePicture);

  const handleImgChange = (e) => {
    setImgUrl(e.target.value);
  };

  const handleImgSubmit = (e) => {
    e.preventDefault();
    dispatch(setProfilePicture({ userId: user.id, imageUrl: imgUrl }));
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const isLoggedIn = id > 0;
  return (
    <>
      {isLoggedIn && (
        <ProfileContainer>
          {user && user.id ? (
            <ProfileContainerLeft key={user.id}>
              <ProfileCard>
                <ProfileCardLeft>
                  <ProfileImg src={profilePicture} />
                  {isEditing ? (
                    <form onSubmit={handleImgSubmit}>
                      <InputDiv
                        type="text"
                        value={imgUrl}
                        onChange={handleImgChange}
                        placeholder="URL de la imagen"
                      />
                      <ProfileChangePictureButton type="submit">
                        Subir
                      </ProfileChangePictureButton>
                    </form>
                  ) : (
                    <ProfileChangePictureButton onClick={handleEdit}>
                      {" "}
                      Cambia tu foto
                    </ProfileChangePictureButton>
                  )}
                </ProfileCardLeft>
                <ProfileCardRight>
                  <ProfileName>
                    {user.name} <br />
                  </ProfileName>
                  <ProfileInfo>
                    Mail: {user.email} <br />
                    Fecha de nacimiento: {user.birthdate} <br />
                  </ProfileInfo>
                </ProfileCardRight>
              </ProfileCard>
            </ProfileContainerLeft>
          ) : null}

          <ProfileContainerRight>
            <UserAppointments>
              <UserAppointmentsTitle>
                <Underline> Appointments </Underline>
              </UserAppointmentsTitle>

              {appointments.length > 0 ? (
                appointments.map((appointment) => {
                  return (
                    <UserAppointmentsListContainer
                      key={appointment.id}
                      {...appointment}
                    >
                      <UserAppointmentsList>
                        <ButtonPropertyDiv>
                          {appointment.date}
                        </ButtonPropertyDiv>
                        <ButtonPropertyDiv>
                          {appointment.time}
                        </ButtonPropertyDiv>
                        <PropertyDiv>{appointment.description}</PropertyDiv>
                        <ButtonPropertyDiv>
                          <UserAppointmentsListButton
                            onClick={async function handleClick() {
                              if (
                                window.confirm(
                                  "¿Estás seguro de que quieres cancelar esta clase?"
                                )
                              ) {
                                try {
                                  const cancelAppointments =
                                    await cancelAppointmentById(appointment.id);
                                  dispatch(cancelarAppointment(appointment.id));
                                  console.log(
                                    "Appointment Cancelled",
                                    cancelAppointments
                                  );
                                } catch (error) {
                                  console.error("No se ha podido cancelar");
                                }
                              }
                            }}
                            status={appointment.status}
                            disabled={appointment.status === "CANCELED"}
                          >
                            {appointment.status}
                          </UserAppointmentsListButton>
                        </ButtonPropertyDiv>
                      </UserAppointmentsList>
                    </UserAppointmentsListContainer>
                  );
                })
              ) : (
                <NavigateDiv>
                  <YouMustLogin>¡Todavía no has agendado clases!</YouMustLogin>
                  <ButtonAuth onClick={() => navigate("/appointments")}>
                    {" "}
                    ¡Agenda!
                  </ButtonAuth>
                </NavigateDiv>
              )}
            </UserAppointments>
          </ProfileContainerRight>
        </ProfileContainer>
      )}
      {!isLoggedIn && (
        <YouMustLogin>¡Debes loguearte para ver esta página!</YouMustLogin>
      )}
    </>
  );
}
