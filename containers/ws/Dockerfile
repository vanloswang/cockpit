FROM fedora:24
MAINTAINER "Stef Walter" <stefw@redhat.com>

ARG RELEASE
ARG VERSION
ARG COCKPIT_RPM_URL=https://kojipkgs.fedoraproject.org/packages/cockpit
ARG USE_REPO

ADD . /container

# Again see above ... we do our branching in shell script
RUN /container/install-package.sh && /container/prep-container.sh



LABEL INSTALL /usr/bin/docker run --rm --privileged -v /:/host IMAGE /container/atomic-install
LABEL UNINSTALL /usr/bin/docker run --rm --privileged -v /:/host IMAGE /container/atomic-uninstall
LABEL RUN /usr/bin/docker run -d --privileged --pid=host -v /:/host IMAGE /container/atomic-run --local-ssh

# Look ma, no EXPOSE

CMD ["/container/atomic-run"]
